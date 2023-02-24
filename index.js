const exppress = require("express");
const chalk = require("chalk");
const app = exppress();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen("3000", (req, res) => {
  console.log(chalk.blue.bgRed.bold("Port on running 3000"));
});
