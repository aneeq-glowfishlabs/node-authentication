const UserController = require("../controllers/UserController");
const UserService = require("../services/UserService");
const db = require("../models");
const userService = new UserService(db);
const userController = new UserController(userService);

var routes = require("express").Router();


const authorize = require("../middlewares/authorize.middleware");

/**
 *  @swagger
 *  tags:
 *      name: User
 *      description: All requests related to User
 */

/**
 *  @swagger
 *  securityDefinitions:
 *      JWT:       
 *          type: apiKey
 *          name: Authorization
 *          in: header
 *          bearerFormat: JWT
 */
/**
 *  @swagger
 *  /api/user/profile:
 *      get:
 *          security:
 *            - JWT: []
 *          tags: [User]
 *          description: Login User with Email and Password
 *          responses:
 *              200:
 *                  description: A successful response
 *              401:
 *                  description: Authentication failed
 *              500:
 *                  description: Some error occurred while logging in.
 */
routes.get(
  "/profile",
  authorize(),
  userController.getProfile
);

/**
 *  @swagger
 *  /api/user/profile:
 *      post:
 *          security:
 *            - JWT: []
 *          tags: [User]
 *          description: Update Profile
 *          parameters:
 *            - name: firstName
 *              description: First Name of the user 
 *              in: path
 *              required: true
 *              type: string
 *            - name: lastName
 *              description: Last Name of the user 
 *              in: path
 *              required: true
 *              type: string
 *            - name: age
 *              description: Age of the user 
 *              in: path
 *              required: true
 *              type: integer
 *            - name: gender
 *              description: Gender of the user 
 *              in: path
 *              required: true
 *              type: string
 *              enum: [Male, Female, Other]
 *          responses:
 *              200:
 *                  description: A successful response
 *              401:
 *                  description: Authentication failed
 *              500:
 *                  description: Some error occurred while logging in.
 */
 routes.post(
  "/profile",
  authorize(),
  userController.updateProfile
);

module.exports = routes;
