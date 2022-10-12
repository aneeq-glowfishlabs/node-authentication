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
        firstName: req.body.firstName? req.body.firstName: null,
        lastName: req.body.lastName? req.body.lastName: null,
        gender: req.body.gender? req.body.gender: null,
        age: req.body.age? req.body.age: null
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