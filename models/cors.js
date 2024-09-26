module.exports =(Sequelize, DataTypes) =>{
    return{
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW(0)
        },
        deletedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW(0)
        }
    }
};