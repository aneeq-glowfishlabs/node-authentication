const AuthController = require("../controllers/AuthController");
const AuthService = require("../services/AuthService");
const db = require("../models");
const authService = new AuthService(db);
const authController = new AuthController(authService);

var routes = require("express").Router();

const AuthValidator = require("../validators/AuthValidator");
const authValidator = new AuthValidator();
const validate = require("../middlewares/validate.middleware");

/**
 *  @swagger
 *  tags:
 *      name: Authentication
 *      description: All requests related to authentication
 */

/**
 *  @swagger
 *  /api/auth/login:
 *      post:
 *          tags: [Authentication]
 *          description: Login User with Email and Password
 *          parameters:
 *            - name: email
 *              description: Email of the user
 *              in: formData
 *              required: true
 *              type: string
 *            - name: password
 *              description: User's Password
 *              in: formData
 *              required: true
 *              type: string
 *          responses:
 *              200:
 *                  description: A successful response
 *              401:
 *                  description: Authentication failed
 *              500:
 *                  description: Some error occurred while logging in.
 */
routes.post(
  "/login",
  validate(authValidator.loginSchema),
  authController.login
);
/**
 *  @swagger
 *  /api/auth/signup:
 *      post:
 *          tags: [Authentication]
 *          description: User Signup
 *          parameters:
 *            - name: email
 *              description: Email of the user
 *              in: formData
 *              required: true
 *              type: string
 *            - name: password
 *              description: User's Password
 *              in: formData
 *              required: true
 *              type: string
 *            - name: firstName
 *              description: User's First Name
 *              in: formData
 *              required: true
 *              type: string
 *            - name: lastName
 *              description: User's Last Name
 *              in: formData
 *              required: true
 *              type: string
 *            - name: phone
 *              description: User's Phone Number
 *              in: formData
 *              required: true
 *              type: string
 *            - name: gender
 *              description: User's Gender
 *              in: formData
 *              required: true
 *              type: string
 *              enum: [Male, Female, Other]
 *            - name: age
 *              description: User's Age
 *              in: formData
 *              required: true
 *              type: integer
 *          responses:
 *              200:
 *                  description: A successful response
 *              401:
 *                  description: Authentication failed
 *              500:
 *                  description: Some error occurred while logging in.
 */
routes.post(
  "/signup",
  validate(authValidator.signupSchema),
  authController.signup
);

module.exports = routes;
