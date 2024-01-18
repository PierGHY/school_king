const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");

module.exports = (sequelize, DataTypes) => {
    const Status = sequelize.define(
        "Status",
        {
            // Model attributes are defined here
            name: DataTypes.STRING,
        },
        {
            // Other model options go here
        }
    );


    // `sequelize.define` also returns the model
    console.log(Status === sequelize.models.Status); // true
    return Status;
}