"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.belongsToMany(models.activity, {
        through: "participants",
        foreignKey: "userId",
        as: "participant",
      })
      user.hasMany(models.activity, { as: "host", foreignKey: "hostId" })
    }
  }
  user.init(
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      address: DataTypes.STRING,
      gender: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
    }
  )
  return user
}
