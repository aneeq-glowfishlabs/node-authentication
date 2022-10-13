class UserController {
    constructor(userService) {
        this._userService = userService;
    }
    getProfile = async (req, res, next) => {
        this._userService
          .getProfile(req.currentUser.id)
          .then((data) => {
            res.json(data);
          })
          .catch((error) => {
            next(error);
          });
    };
    updateProfile = async (req, res, next) => {
      var updateJsonObject = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        age: req.body.age
      }
      this._userService
          .updateProfile(updateJsonObject,req.currentUser.id)
          .then((data) => {
            res.json(data);
          })
          .catch((error) => {
            next(error);
          });
    }
}

module.exports = UserController;