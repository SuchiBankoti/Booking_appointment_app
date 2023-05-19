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

module.exports = Appointment;
