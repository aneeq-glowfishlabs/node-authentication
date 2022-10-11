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
}

module.exports = UserController;