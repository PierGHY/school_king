const { Sequelize, DataTypes } = require("sequelize");
const path = require('path');
const sequelize = new Sequelize("mysql::memory:");
// const Card = require(path.join(__dirname, './card'))(sequelize, Sequelize.DataTypes);

// const Card = card(sequelize, Sequelize.DataTypes)

module.exports = (sequelize, DataTypes) => {
    const Type = sequelize.define(
        "Type",
        {
            // Model attributes are defined here
            name: DataTypes.STRING,
        },
        {
            // Other model options go here
        }
    );

    // Type.hasMany(Card);

    // `sequelize.define` also returns the model
    console.log(Type === sequelize.models.Type); // tru
    return Type;
}