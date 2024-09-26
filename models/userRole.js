module.exports = (Sequelize, sequelize, DataTypes) => {
    return sequelize.define("userRole", {
        ...require('./cors') (Sequelize, DataTypes),

        role : {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    });
}