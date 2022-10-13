const Joi = require("joi");

class UserValidator {
  updateProfileSchema = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    gender: Joi.string().valid('Male', 'Female', 'Other'),
    age: Joi.number().integer().min(0).max(150)
  });
}

module.exports = UserValidator;
