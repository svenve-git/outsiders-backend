const { ApolloError } = require("apollo-server")
const bcrypt = require("bcrypt")
const { toJWT } = require("../auth/auth")
const jwt = require("jsonwebtoken")
const { SALT_ROUNDS } = require("../config/constants")

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    users: async (parent, _args, { db }, info) => {
      return await db.user.findAll({ include: [db.activity] })
    },
    activities: async (parent, _args, { db }, info) => {
      return await db.activity.findAll({
        include: [
          { model: db.user, as: "participant" },
          { model: db.user, as: "host" },
          { model: db.activityType },
        ],
      })
    },
    activityTypes: async (parent, _args, { db }, info) => {
      return await db.activityType.findAll()
    },
  },

  Mutation: {
    signup: async (
      parent,
      { fullName, email, password, address, gender },
      { db },
      info
    ) => {
      const existingUser = await db.user.findOne({ email })
      if (existingUser) {
        return "Email already in use"
      }
      const hashedPassword = bcrypt.hashSync(password, SALT_ROUNDS)
      const newUser = await db.user.create({
        fullName,
        email,
        hashedPassword,
        address,
        gender,
      })
      const token = toJWT({ userId: newUser.dataValues.id })
      delete newUser.dataValues["password"]
      // here double check we're not sending the user password!
      return { token, newUser }
    },

    login: async (parent, { email, password }, { db }, info) => {
      const user = await db.user.findOne({ where: { email } })
      // console.log("user:", user)
      if (!user || !bcrypt.compareSync(password, user.password)) {
        return new ApolloError("User not found or incorrect password")
      }
      delete user.dataValues["password"]
      // console.log("rest values", ...user.dataValues)
      const token = toJWT({ userId: user.id })

      // const token = jwt.sign(data, JWT_SECRET, { expiresIn: "2h" })
      console.log("Hello")

      console.log("token", token)
      console.log("user after", user)
      return { token, user: user.dataValues }
    },
  },
}

module.exports = { resolvers }
