class UserService {
  constructor(db) {
    this._db = db;
  }
  getProfile = async (userId) => {
    try {
      return await this._db.profile.findOne({
        where: { UserId: userId },
      });
    } catch (error) {
      throw {
        status: 500,
        message: error.message,
      };
    }
  };
  updateProfile = async (updateJsonObject, userId) => {
    try {
      var update = await this._db.profile.update(updateJsonObject, {
        where: { UserId: userId },
      });

      return this._db.profile.findOne({
        where: { UserId: userId },
      });
    } catch (error) {
      throw {
        status: 500,
        message: error.message,
      };
    }
  };
}

module.exports = UserService;
