const express = require("express");
const auth = require("./auth.routes.js");
const user = require("./user.routes.js");
const routes = express.Router();

routes.use("/auth", auth);
routes.use("/user", user);

module.exports = routes;
