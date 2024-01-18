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
        }
    );
    // `sequelize.define` also returns the model
    console.log(Card === sequelize.models.Card); // true
    return Card;
}