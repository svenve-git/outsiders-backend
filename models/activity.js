"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      activity.belongsToMany(models.user, {
        through: "participants",
        foreignKey: "activityId",
        as: "participant",
      }),
        activity.belongsTo(models.user, {
          foreignKey: "hostId",
          as: "host",
        }),
        activity.belongsTo(models.activityType, {
          foreignKey: "activityTypeId",
        })
    }
  }
  activity.init(
    {
      title: DataTypes.STRING,
      date: DataTypes.DATEONLY,
      hostId: DataTypes.INTEGER,
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
      activityTypeId: DataTypes.INTEGER,
      isPrivate: DataTypes.BOOLEAN,
      startingTime: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: "activity",
    }
  )
  return activity
}
