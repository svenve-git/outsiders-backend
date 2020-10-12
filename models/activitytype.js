"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class activityType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      activityType.hasMany(models.activity, {
        foreignKey: "activityTypeId",
      })
    }
  }
  activityType.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      icon: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "activityType",
    }
  )
  return activityType
}
