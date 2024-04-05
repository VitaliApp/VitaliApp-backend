require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const routes = require("./routes/index");
const db = require("./util/db");
const errorHandler = require("./middlewares/errorHandler");
const cors = require("cors");

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }));

db.connect();

app.use(routes);
app.use(errorHandler.errorHandler);

app.listen(PORT, () => {
  console.log("Server listening in port " + PORT);
});
