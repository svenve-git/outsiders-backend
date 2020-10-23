"use strict"
const bcrypt = require("bcrypt")
const { SALT_ROUNDS } = require("../config/constants")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        fullName: "Test",
        email: "test@mail.com",
        password: bcrypt.hashSync("123", SALT_ROUNDS),
        address: "Prinsengracht 1, Amsterdam",
        gender: "m",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Case",
        email: "case@mail.com",
        password: bcrypt.hashSync("abc", SALT_ROUNDS),
        address: "Haarlemmerdijk 4, Amsterdam",
        gender: "m",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Annette",
        email: "annette@mail.com",
        password: bcrypt.hashSync("def", SALT_ROUNDS),
        address: "Kromboomsloot 3, Amsterdam",
        gender: "f",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Pierre",
        email: "pierre@mail.com",
        password: bcrypt.hashSync("1234", SALT_ROUNDS),
        address: "Sarphatistraat 236, Amsterdam",
        gender: "m",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Linda",
        email: "linda@mail.com",
        password: bcrypt.hashSync("secret", SALT_ROUNDS),
        address: "Zeilstraat 33, Amsterdam",
        gender: "f",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Marianne",
        email: "marianne@mail.com",
        password: bcrypt.hashSync("wachtwoord", SALT_ROUNDS),
        address: "Middenweg 21, Amsterdam",
        gender: "f",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Ricardo",
        email: "ricardo@mail.com",
        password: bcrypt.hashSync("geheim", SALT_ROUNDS),
        address: "Buitenzagerij 2, Amsterdam",
        gender: "m",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Manuel",
        email: "manuel@mail.com",
        password: bcrypt.hashSync("supersecret", SALT_ROUNDS),
        address: "Van Woustraat 12, Amsterdam",
        gender: "m",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("users", null, {})
  },
}
