var admin = require("../utilities/Firebase");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");

class AuthService {
  constructor(db) {
    this._db = db;
  }

  signup = async (email, password) => {
    
    try {
      const userResponse = await admin.auth().createUser({
        email: email,
        password: password,
        emailVerified: false,
        disabled: false,
      });

      return await this._db.user.create({
        id: uuidv4(),
        email: email,
        firebaseUid: userResponse.uid
      });
    } catch (error) {
      throw {
        status: 403,
        message: error.errorInfo ? error.errorInfo.message : err.message,
      };
    }
  };

  /* To be handled from front-end 
  For Testing Purposed only
  */
  login = async (email, password) => {
    const user = await this._db.user.findOne({ where: { email: email } });
    if (!user) {
      throw { status: 403, message: "No User Exists with this Email" };
    }

    try {
      var data = {
        email: email,
        password: password,
        returnSecureToken: true,
      };
        const response = await axios.post(
          "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBFBMj80ZIsL43r-QpKTk-tJAjznRrL738",
          data
        );
        return response.data;
      
    } catch (error) {
      throw {
        status: 403,
        message: error.errorInfo ? error.errorInfo.message : error.message,
      };
    }
  };
}

module.exports = AuthService;
