const express = require("express");
const route = express.Router();
const {
  home,
  getAllApt,
  getOneApt,
  postApt,
  editApt,
  deleteApt,
} = require("./controllers/controllers");

route.get("/", home);
route.get("/data", getAllApt);
route.post("/postApt", postApt);
route.get("/data/:id", getOneApt);
route.post("/edit/:id", editApt);
route.delete("/delete/:id", deleteApt);

module.exports = route;
