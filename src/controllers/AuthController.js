class AuthController {
  constructor(authService) {
    this._authService = authService;
  }
  signup = async (req, res, next) => {
    this._authService
      .signup(req.body.email, req.body.password, req.body.firstName, req.body.lastName, req.body.phone, req.body.gender, req.body.age)
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        next(error);
      });
  };
  login = async (req, res, next) => {
    this._authService
      .login(req.body.email, req.body.password)
      .then((data) => {
        res.json({ data });
      })
      .catch((error) => {
        next(error);
      });
  };
}
module.exports = AuthController;
