const express = require("express");
const app = express();
const route = require("./routes");
const path = require("path");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(route);

app.listen(5000, () => {
  console.log("server active at booking app");
});
