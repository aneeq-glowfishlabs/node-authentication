var admin = require("firebase-admin");
var serviceAccount = require("../../node-authentication-cd577-firebase-adminsdk-ydmf0-6ddc23a0bb.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;