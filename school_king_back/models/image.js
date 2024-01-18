const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");

module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define(
        "Image",
        {
            // Model attributes are defined here
            base_64: DataTypes.STRING,
        },
        {
            // Other model options go here
        }
    );


    // `sequelize.define` also returns the model
    console.log(Image === sequelize.models.Image); // true
    return Image;
}