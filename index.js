require("dotenv").config();
const express = require("express");
const chalk = require("chalk");
const routes = require("./routes");
const app = express();

//middlware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen("3000", (req, res) => {
  console.log(chalk.blue.bgRed.bold("Port on running 3000"));
});
