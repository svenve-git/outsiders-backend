"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "participants",
      [
        {
          userId: 1,
          activityId: 1,
        },
        {
          userId: 1,
          activityId: 2,
        },
        {
          userId: 1,
          activityId: 3,
        },
        {
          userId: 2,
          activityId: 3,
        },
        {
          userId: 2,
          activityId: 3,
        },
        {
          userId: 2,
          activityId: 4,
        },
        {
          userId: 2,
          activityId: 5,
        },
        {
          userId: 3,
          activityId: 1,
        },
        {
          userId: 3,
          activityId: 2,
        },
        {
          userId: 3,
          activityId: 4,
        },
        {
          userId: 3,
          activityId: 6,
        },
        {
          userId: 3,
          activityId: 8,
        },
        {
          userId: 4,
          activityId: 3,
        },
        {
          userId: 4,
          activityId: 5,
        },
        {
          userId: 4,
          activityId: 7,
        },
        {
          userId: 5,
          activityId: 3,
        },
        {
          userId: 5,
          activityId: 7,
        },
        {
          userId: 5,
          activityId: 8,
        },
        {
          userId: 6,
          activityId: 4,
        },
        {
          userId: 6,
          activityId: 8,
        },
        {
          userId: 7,
          activityId: 3,
        },
        {
          userId: 7,
          activityId: 6,
        },
        {
          userId: 8,
          activityId: 1,
        },
        {
          userId: 8,
          activityId: 3,
        },
        {
          userId: 8,
          activityId: 5,
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
