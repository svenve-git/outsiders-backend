"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "participants",
      [
        {
          userId: 1,
          activityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          activityId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          activityId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          activityId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          activityId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          activityId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          activityId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          activityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          activityId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          activityId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          activityId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          activityId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          activityId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          activityId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          activityId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          activityId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          activityId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          activityId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          activityId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          activityId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          activityId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          activityId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          activityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          activityId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          activityId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
