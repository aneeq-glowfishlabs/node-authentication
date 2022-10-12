const Joi = require("joi");

class AuthValidator {
  loginSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  signupSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    phone: Joi.string().min(12).max(16),
    gender: Joi.string().valid('Male', 'Female', 'Other'),
    age: Joi.number().integer().min(0).max(150)
  });
}

module.exports = AuthValidator;
