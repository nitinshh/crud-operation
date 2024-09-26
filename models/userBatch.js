module.exports = (Sequelize, sequelize, DataTypes) => {
    return sequelize.define("userBatch", {
        ...require('./cors') (Sequelize, DataTypes),

        batch: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
}