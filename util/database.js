const Sequelize = require("sequelize");

const sequelize = new Sequelize("new_schema", "root", "s_qs@ym_i#22", {
  host: "localhost",
  dialect: "mysql",
});

const Appointment = sequelize.define("appointments", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  number: {
    type: Sequelize.BIGINT,
    allowNull: true,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  time: {
    type: Sequelize.TIME,
    allowNull: true,
  },
});

sequelize
  .sync()
  .then(() => console.log("appointment table created successfully."))
  .catch((error) => console.log(`Error creating appointment table: ${error}`));

// const obj = {
//   name: "suchi",
//   email: "suchi95@gmail.com",
//   number: 8095677834,
//   date: "2023-05-17",
//   time: "14:30:00",
// };
// Appointment.create(obj)
//   .then((data) => {
//     console.log("data posted");
//     console.log(data);
//   })
//   .catch((e) => console.log(e));

// Appointment.findAll({
//   attributes: ["id", "name", "email", "number", "date", "time"],
// })
//   .then((data) => {
//     const dataJson = data.map((apt) => apt.toJSON());
//     console.log("get all data");
//     console.log(dataJson);
//   })
//   .catch((e) => console.log(e));

module.exports = Appointment;
