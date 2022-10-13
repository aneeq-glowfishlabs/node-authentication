const dotenvConfig = require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocumentJson = require("../swagger");
const swaggerJsDoc = require("swagger-jsdoc");
var path = require('path')
const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions)); //parse requests of content-type - application/json
app.use(express.json()); // parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const swaggerDocs = swaggerJsDoc(swaggerDocumentJson);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs)); // Swagger API Route


const db = require("./models");

//db.sequelize.sync({ force: true });
db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
});

app.use("/api", routes);

const handleError = require("./middlewares/handleError.middleware");
app.use(handleError());

app.listen(process.env.PORT | "3000", () => {
  console.log(`Server is running on port: ${process.env.PORT | "3000"}`);
});
