"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "activities",
      [
        {
          title: "Jogging",
          date: "2020-10-26",
          hostId: 3,
          groupSize: 12,
          activityTypeId: 2,
          private: false,
          latitude: 52.388303,
          longitude: 4.871757,
          startingTime: "11:30",
          endingTime: "12:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Football",
          date: "2020-10-28",
          hostId: 2,
          groupSize: 16,
          activityTypeId: 6,
          private: false,
          latitude: 52.388303,
          longitude: 4.871757,
          startingTime: "12:00",
          endingTime: "13:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Sunday Walk",
          date: "2020-10-22",
          hostId: 8,
          groupSize: 10,
          activityTypeId: 1,
          private: false,
          latitude: 52.388303,
          longitude: 4.871757,
          startingTime: "11:30",
          endingTime: "12:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Basketball",
          date: "2020-10-18",
          hostId: 5,
          groupSize: 12,
          activityTypeId: 9,
          private: false,
          latitude: 52.388303,
          longitude: 4.871757,
          startingTime: "17:30",
          endingTime: "18:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Jogging",
          date: "2020-10-24",
          hostId: 4,
          groupSize: 12,
          activityTypeId: 3,
          private: false,
          latitude: 52.388303,
          longitude: 4.871757,
          startingTime: "20:30",
          endingTime: "21:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Cycling",
          date: "2020-10-26",
          hostId: 7,
          groupSize: 12,
          activityTypeId: 3,
          private: false,
          latitude: 52.388303,
          longitude: 4.871757,
          startingTime: "09:30",
          endingTime: "11:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Basketball",
          date: "2020-10-28",
          hostId: 3,
          groupSize: 12,
          activityTypeId: 9,
          private: false,
          latitude: 52.388303,
          longitude: 4.871757,
          startingTime: "11:30",
          endingTime: "12:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Football",
          date: "2020-10-28",
          hostId: 3,
          groupSize: 12,
          activityTypeId: 6,
          private: false,
          latitude: 52.388303,
          longitude: 4.871757,
          startingTime: "11:30",
          endingTime: "12:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Running",
          date: "2020-10-28",
          hostId: 3,
          groupSize: 12,
          activityTypeId: 2,
          private: false,
          latitude: 52.388303,
          longitude: 4.871757,
          startingTime: "11:30",
          endingTime: "12:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tai Chi",
          date: "2020-10-28",
          hostId: 3,
          groupSize: 8,
          activityTypeId: 13,
          private: false,
          latitude: 52.388303,
          longitude: 4.871757,
          startingTime: "11:30",
          endingTime: "12:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Volleyball",
          date: "2020-10-28",
          hostId: 3,
          groupSize: 12,
          activityTypeId: 10,
          private: false,
          latitude: 52.388303,
          longitude: 4.871757,
          startingTime: "12:30",
          endingTime: "13:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Football",
          date: "2020-10-21",
          hostId: 5,
          groupSize: 14,
          activityTypeId: 6,
          private: false,
          latitude: 52.388303,
          longitude: 4.871757,
          startingTime: "14:30",
          endingTime: "16:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Running",
          date: "2020-10-22",
          hostId: 3,
          groupSize: 12,
          activityTypeId: 2,
          private: false,
          latitude: 52.388303,
          longitude: 4.871757,
          startingTime: "11:30",
          endingTime: "12:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tai Chi",
          date: "2020-10-23",
          hostId: 3,
          groupSize: 8,
          activityTypeId: 13,
          private: false,
          latitude: 52.388303,
          longitude: 4.871757,
          startingTime: "11:30",
          endingTime: "12:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Volleyball",
          date: "2020-10-25",
          hostId: 3,
          groupSize: 12,
          activityTypeId: 10,
          private: false,
          latitude: 52.388303,
          longitude: 4.871757,
          startingTime: "12:30",
          endingTime: "13:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Football",
          date: "2020-10-27",
          hostId: 5,
          groupSize: 14,
          activityTypeId: 6,
          private: false,
          latitude: 52.388303,
          longitude: 4.871757,
          startingTime: "14:30",
          endingTime: "16:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("activities", null, {})
  },
}
