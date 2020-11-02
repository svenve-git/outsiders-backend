"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "activities",
      [
        {
          title: "A casual jog in the park",
          date: "2020-10-26",
          hostId: 1,
          activityTypeId: 2,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "11:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Football @ skatepark",
          date: "2020-10-28",
          hostId: 2,
          activityTypeId: 6,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "12:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Sunday Walk in Vliegerbos",
          date: "2020-10-22",
          hostId: 8,
          activityTypeId: 1,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "11:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Basketball - just shooting",
          date: "2020-10-28",
          hostId: 5,
          activityTypeId: 9,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "17:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Jogging",
          date: "2020-10-24",
          hostId: 4,
          activityTypeId: 3,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "20:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Cycling",
          date: "2020-10-26",
          hostId: 7,
          activityTypeId: 3,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "09:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Basketball",
          date: "2020-10-28",
          hostId: 1,
          activityTypeId: 9,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "11:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Football",
          date: "2020-10-28",
          hostId: 6,
          activityTypeId: 6,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "11:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Running",
          date: "2020-10-28",
          hostId: 3,
          activityTypeId: 2,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "11:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tai Chi ",
          date: "2020-10-28",
          hostId: 3,
          activityTypeId: 13,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "11:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Volleyball",
          date: "2020-10-28",
          hostId: 3,
          activityTypeId: 10,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "12:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Football",
          date: "2020-10-21",
          hostId: 5,
          activityTypeId: 6,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Running",
          date: "2020-10-22",
          hostId: 3,
          activityTypeId: 2,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "11:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tai Chi ",
          date: "2020-10-23",
          hostId: 3,
          activityTypeId: 13,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "11:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Volleyball",
          date: "2020-10-25",
          hostId: 3,
          activityTypeId: 10,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "12:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Just kickin a ball",
          date: "2020-10-27",
          hostId: 5,
          activityTypeId: 6,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Run around the block",
          date: "2020-10-27",
          hostId: 5,
          activityTypeId: 2,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "6v6 football",
          date: "2020-10-27",
          hostId: 5,
          activityTypeId: 6,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Let's go let's go (run @ West)",
          date: "2020-11-03",
          hostId: 5,
          activityTypeId: 2,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Lekker voetballen",
          date: "2020-11-13",
          hostId: 5,
          activityTypeId: 6,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Walk in Westerpark",
          date: "2020-11-11",
          hostId: 5,
          activityTypeId: 1,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Walk around Noord",
          date: "2020-10-27",
          hostId: 5,
          activityTypeId: 1,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Slow run @ Vliegerbos",
          date: "2020-10-27",
          hostId: 5,
          activityTypeId: 2,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tai Chi ",
          date: "2020-10-28",
          hostId: 3,
          activityTypeId: 13,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "11:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Volleyball",
          date: "2020-10-28",
          hostId: 3,
          activityTypeId: 10,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "12:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Football",
          date: "2020-10-21",
          hostId: 5,
          activityTypeId: 6,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Running",
          date: "2020-10-22",
          hostId: 3,
          activityTypeId: 2,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "11:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tai Chi ",
          date: "2020-10-23",
          hostId: 3,
          activityTypeId: 13,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "11:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Volleyball",
          date: "2020-10-25",
          hostId: 3,
          activityTypeId: 10,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "12:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Just kickin a ball",
          date: "2020-10-27",
          hostId: 5,
          activityTypeId: 6,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Run around the block",
          date: "2020-11-27",
          hostId: 5,
          activityTypeId: 2,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "6v6 football",
          date: "2020-10-27",
          hostId: 5,
          activityTypeId: 6,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Let's go let's go (run @ West)",
          date: "2020-11-01",
          hostId: 5,
          activityTypeId: 2,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Lekker voetballen",
          date: "2020-11-03",
          hostId: 5,
          activityTypeId: 6,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Walk in Westerpark",
          date: "2020-11-01",
          hostId: 5,
          activityTypeId: 1,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Walk around Noord",
          date: "2020-10-26",
          hostId: 5,
          activityTypeId: 1,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Slow run @ Vliegerbos",
          date: "2020-10-31",
          hostId: 5,
          activityTypeId: 2,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tai Chi ",
          date: "2020-10-29",
          hostId: 3,
          activityTypeId: 13,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "11:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Volleyball",
          date: "2020-11-02",
          hostId: 3,
          activityTypeId: 10,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "12:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Football",
          date: "2020-10-29",
          hostId: 5,
          activityTypeId: 6,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Running",
          date: "2020-10-24",
          hostId: 3,
          activityTypeId: 2,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "11:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tai Chi ",
          date: "2020-11-23",
          hostId: 3,
          activityTypeId: 13,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "11:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Volleyball",
          date: "2020-11-25",
          hostId: 3,
          activityTypeId: 10,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "12:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Just kickin a ball",
          date: "2020-11-27",
          hostId: 5,
          activityTypeId: 6,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: 4.871957,
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Run around the block",
          date: "2020-11-27",
          hostId: 5,
          activityTypeId: 2,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: 4.871677,
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "6v6 football",
          date: "2020-11-07",
          hostId: 5,
          activityTypeId: 6,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: 4.871887,
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Let's go let's go (run @ West)",
          date: "2020-11-05",
          hostId: 5,
          activityTypeId: 2,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: 4.871811,
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Lekker voetballen",
          date: "2020-11-09",
          hostId: 5,
          activityTypeId: 6,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: 4.871822,
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Walk in Westerpark",
          date: "2020-11-09",
          hostId: 5,
          activityTypeId: 1,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: 4.871833,
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Walk around Noord",
          date: "2020-11-06",
          hostId: 5,
          activityTypeId: 1,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: 4.871444,
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Slow run @ Vliegerbos",
          date: "2020-10-30",
          hostId: 5,
          activityTypeId: 2,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tai Chi ",
          date: "2020-11-18",
          hostId: 3,
          activityTypeId: 13,
          isPrivate: false,
          latitude: 52.388903,
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "11:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Volleyball",
          date: "2020-11-18",
          hostId: 3,
          activityTypeId: 10,
          isPrivate: false,
          latitude: 52.389653,
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "12:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Football",
          date: "2020-11-11",
          hostId: 5,
          activityTypeId: 6,
          isPrivate: false,
          latitude: 52.387873,
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Running",
          date: "2020-11-12",
          hostId: 3,
          activityTypeId: 2,
          isPrivate: false,
          latitude: 52.386203,
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "11:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tai Chi ",
          date: "2020-11-13",
          hostId: 3,
          activityTypeId: 13,
          isPrivate: false,
          latitude: 52.385363,
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "11:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Volleyball",
          date: "2020-11-15",
          hostId: 3,
          activityTypeId: 10,
          isPrivate: false,
          latitude: 52.385403,
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "12:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Just kickin a ball",
          date: "2020-11-17",
          hostId: 5,
          activityTypeId: 6,
          isPrivate: false,
          latitude: 52.384903,
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Run around the block",
          date: "2020-11-17",
          hostId: 5,
          activityTypeId: 2,
          isPrivate: false,
          latitude: 52.385123,
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "6v6 football",
          date: "2020-11-07",
          hostId: 5,
          activityTypeId: 6,
          isPrivate: false,
          latitude: 52.387593,
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Let's go let's go (run @ West)",
          date: "2020-11-13",
          hostId: 5,
          activityTypeId: 2,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Lekker voetballen",
          date: "2020-11-10",
          hostId: 5,
          activityTypeId: 6,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Walk in Westerpark",
          date: "2020-11-14",
          hostId: 5,
          activityTypeId: 1,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Walk around Noord",
          date: "2020-10-28",
          hostId: 5,
          activityTypeId: 1,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Slow run @ Vliegerbos",
          date: "2020-11-01",
          hostId: 5,
          activityTypeId: 2,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tai Chi ",
          date: "2020-11-12",
          hostId: 3,
          activityTypeId: 13,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "11:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Volleyball",
          date: "2020-11-12",
          hostId: 3,
          activityTypeId: 10,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "12:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Football",
          date: "2020-11-11",
          hostId: 5,
          activityTypeId: 6,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Running",
          date: "2020-11-22",
          hostId: 3,
          activityTypeId: 2,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "11:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tai Chi ",
          date: "2020-11-23",
          hostId: 3,
          activityTypeId: 13,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "11:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Volleyball",
          date: "2020-11-25",
          hostId: 3,
          activityTypeId: 10,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "12:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Just kickin a ball",
          date: "2020-11-27",
          hostId: 5,
          activityTypeId: 6,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Run around the block",
          date: "2020-11-27",
          hostId: 5,
          activityTypeId: 2,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "6v6 football",
          date: "2020-11-27",
          hostId: 5,
          activityTypeId: 6,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Let's go let's go (run @ West)",
          date: "2020-12-03",
          hostId: 5,
          activityTypeId: 2,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Lekker voetballen",
          date: "2020-11-23",
          hostId: 5,
          activityTypeId: 6,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Walk in Westerpark",
          date: "2020-11-21",
          hostId: 5,
          activityTypeId: 1,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Walk around Noord",
          date: "2020-10-27",
          hostId: 5,
          activityTypeId: 1,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Slow run @ Vliegerbos",
          date: "2020-10-27",
          hostId: 5,
          activityTypeId: 2,
          isPrivate: false,
          latitude: (52.3 + Math.random() / 10).toFixed(6),
          longitude: (4.8 + Math.random() / 5).toFixed(6),
          startingTime: "14:30",
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
