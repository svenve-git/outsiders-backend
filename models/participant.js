"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class participant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      participant.belongsTo(models.user, { foreignKey: "userId" })
      participant.belongsTo(models.activity, { foreignKey: "activityId" })
    }
  }
  participant.init(
    {
      userId: DataTypes.INTEGER,
      activityId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "participant",
    }
  )
  return participant
}
