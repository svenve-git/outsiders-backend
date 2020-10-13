"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "Test",
        email: "test@mail.com",
        password: "123",
        address: "Prinsengracht 1, Amsterdam",
        gender: "m",
      },
      {
        name: "Case",
        email: "case@mail.com",
        password: "abc",
        address: "Haarlemmerdijk 4, Amsterdam",
        gender: "m",
      },
      {
        name: "Annette",
        email: "annette@mail.com",
        password: "def",
        address: "Kromboomsloot 3, Amsterdam",
        gender: "f",
      },
      {
        name: "Pierre",
        email: "pierre@mail.com",
        password: "1234",
        address: "Sarphatistraat 236, Amsterdam",
        gender: "m",
      },
      {
        name: "Linda",
        email: "linda@mail.com",
        password: "secret",
        address: "Zeilstraat 33, Amsterdam",
        gender: "f",
      },
      {
        name: "Marianne",
        email: "marianne@mail.com",
        password: "wachtwoord",
        address: "Middenweg 21, Amsterdam",
        gender: "f",
      },
      {
        name: "Ricardo",
        email: "ricardo@mail.com",
        password: "geheim",
        address: "Buitenzagerij 2, Amsterdam",
        gender: "m",
      },
      {
        name: "Manuel",
        email: "manuel@mail.com",
        password: "supersecret",
        address: "Van Woustraat 12, Amsterdam",
        gender: "m",
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("users", null, {})
  },
}