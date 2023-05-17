const express = require("express");
const route = express.Router();
const {
  home,
  getAllApt,
  postApt,
  editApt,
  deleteApt,
} = require("./controllers/controllers");

route.get("/", home);
route.get("/data", getAllApt);
route.post("/postApt", postApt);
route.put("/edit:id", editApt);
route.post("/delete:id", deleteApt);

module.exports = route;
