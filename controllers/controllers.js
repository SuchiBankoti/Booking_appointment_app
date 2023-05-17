const Appointment = require("../util/database");
const readFile = require("../models/model");

const home = (req, res) => {
  const home = readFile("index.html");
  res.send(home);
};
const getAllApt = (req, res) => {
  Appointment.findAll({
    attributes: ["id", "name", "email", "number", "date", "time"],
  })
    .then((data) => {
      const dataJson = data.map((apt) => apt.toJSON());
      console.log("get all data");
      res.json(dataJson);
    })
    .catch((e) => console.log(e));
};

const postApt = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const number = req.body.number;
  const date = req.body.date;
  const time = req.body.time;
  const obj = {
    name,
    email,
    number,
    date,
    time,
  };
  Appointment.create(obj)
    .then((data) => res.json(data))
    .catch((e) => console.log(e));
};
const editApt = (req, res) => {
  const id = req.params.id;
  const updatedObj = req.body;
  Appointment.update(updatedObj, {
    where: { id: id },
  })
    .then((data) => console.log("appoinment updated"))
    .catch((e) => console.log(e));
};
const deleteApt = () => {
  const id = req.params.id;
  Appointment.destroy({
    where: {
      id: id,
    },
  })
    .then((data) => console.log("appoinment deleted"))
    .catch((e) => console.log(e));
};
module.exports = {
  home,
  getAllApt,
  postApt,
  editApt,
  deleteApt,
};
