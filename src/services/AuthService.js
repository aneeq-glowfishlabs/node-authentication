var admin = require("../utilities/Firebase");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");

class AuthService {
  constructor(db) {
    this._db = db;
  }

  signup = async (email, password,firstName, lastName, phone, gender, age) => {
    
    try {
      const userResponse = await admin.auth().createUser({
        email: email,
        password: password,
        emailVerified: false,
        disabled: false,
      });

      var userInstance = await this._db.user.create({
        id: uuidv4(),
        email: email,
        firebaseUid: userResponse.uid,
        phone:phone?phone:null
      });

      var profileInstance = await this._db.profile.create({
        id: uuidv4(),
        firstName: firstName,
        lastName: lastName,
        UserId: userInstance.id,
        gender: gender?gender:null,
        age: age?age:null,
      }); 
      return {'user':userInstance, 'profile':profileInstance} 
    } catch (error) {
      throw {
        status: 403,
        message: error.errorInfo ? error.errorInfo.message : error.message,
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
