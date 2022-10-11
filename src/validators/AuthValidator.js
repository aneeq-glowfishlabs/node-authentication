const Joi = require("joi");

class AuthValidator {
  loginSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  signupSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
}

module.exports = AuthValidator;
