const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");

module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define(
        "Room",
        {
            // Model attributes are defined here
            name: DataTypes.STRING,
            password: DataTypes.STRING,
        },
    );

    // `sequelize.define` also returns the model
    console.log(Room === sequelize.models.Room); // true
    return Room;
}
