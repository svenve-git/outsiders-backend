"use strict"
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("activities", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      hostId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      groupSize: {
        type: Sequelize.INTEGER,
      },
      latitude: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      longitude: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      activityTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "activityTypes",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      private: {
        type: Sequelize.BOOLEAN,
      },
      startingTime: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      endingTime: {
        type: Sequelize.TIME,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("activities")
  },
}
