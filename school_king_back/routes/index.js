var express = require("express");

const { Sequelize, Op, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize('school_king', 'root', 'root', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

async function testingConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testingConnection()

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
