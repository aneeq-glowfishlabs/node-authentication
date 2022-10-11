class UserService {
    constructor(db) {
      this._db = db;
    }
    getProfile = async (userId) => {
        return {
            profile:true
        }
    };
};

module.exports = UserService;