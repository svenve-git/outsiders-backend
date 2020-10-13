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
        foreignKey: "userId",
        as: "participants",
      })
      activity.belongsTo(models.user, {
        foreignKey: "hostId",
        as: "host",
      })
      activity.belongsTo(models.activityType, { foreignKey: "activityTypeId" })
    }
  }
  activity.init(
    {
      title: DataTypes.STRING,
      date: DataTypes.DATEONLY,
      hostId: DataTypes.INTEGER,
      groupSize: DataTypes.INTEGER,
      latitude: DataTypes.INTEGER,
      longitude: DataTypes.INTEGER,
      activityTypeId: DataTypes.INTEGER,
      private: DataTypes.BOOLEAN,
      startingTime: DataTypes.TIME,
      endingTime: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: "activity",
    }
  )
  return activity
}
