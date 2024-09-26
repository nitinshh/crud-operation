const Sequelize = require("sequelize")
const sequelize = require('../dbConnection').sequelize

module.exports = {
    usersModel : require("./users")(Sequelize, sequelize,Sequelize.DataTypes),
    // userBatchModel : require("./userBatch")(Sequelize, sequelize,Sequelize.DataTypes),
    userRoleModel: require("./userRole")(Sequelize, sequelize,Sequelize.DataTypes)
}