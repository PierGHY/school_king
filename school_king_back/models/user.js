module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
            // Model attributes are defined here
            pseudo: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            role: DataTypes.STRING,
            score: DataTypes.INTEGER,
        },
    );

    // `sequelize.define` also returns the model
    console.log(User === sequelize.models.User); // true
    return User;
}
