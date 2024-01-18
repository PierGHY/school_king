const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");

module.exports = (sequelize, DataTypes) => {
    const Card = sequelize.define(
        "Card",
        {
            // Model attributes are defined here
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: DataTypes.STRING,
            number: DataTypes.INTEGER,
            color: DataTypes.STRING,
        },
        {
            // Other model options go here
        }
    );

    // Card.belongsToMany(User, { through: 'UserCards' });
    // Card.belongsTo(Type);
    // Card.belongsTo(Image);


    // async function checkTable() {
    //     await Card.sync();
    //     console.log("The table for the Card model was just created!");
    // }

    // checkTable()

    // `sequelize.define` also returns the model
    console.log(Card === sequelize.models.Card); // true
    return Card;
}