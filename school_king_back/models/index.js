'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    console.log(db);
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

db.Card.belongsToMany(db.User, { through: 'UserCards' });
db.Card.belongsTo(db.Type);
db.Card.belongsTo(db.Image);
db.Image.hasMany(db.Card)
db.Room.belongsToMany(db.User, { through: 'UserRooms' });
db.Room.belongsTo(db.Status)
db.Status.hasMany(db.Room)
db.Type.hasMany(db.Card);
db.User.belongsToMany(db.Card, { through: 'UserCards' });
db.User.belongsToMany(db.Room, { through: 'UserRooms' });

async function createDb() {
  await sequelize.sync();
  console.log("All models were synchronized successfully.");
}

createDb()

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
