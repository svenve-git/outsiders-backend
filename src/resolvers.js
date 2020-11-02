const { ApolloError, UserInputError } = require("apollo-server")
const bcrypt = require("bcrypt")
const { toJWT, toData } = require("../auth/auth")
const jwt = require("jsonwebtoken")
const { SALT_ROUNDS } = require("../config/constants")
const { Op } = require("sequelize")

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    findUser: async (parent, { id }, { db }, info) => {
      return await db.user.findByPk(id)
    },
    allUsers: async (parent, _args, { db }, info) => {
      return await db.user.findAll({
        include: [
          { model: db.activity, as: "host" },
          { model: db.activity, as: "participant" },
        ],
      })
    },
    findActivity: async (parent, { id }, { db }, info) => {
      return await db.activity.findByPk(id)
    },
    allActivities: async (parent, _args, { db }, info) => {
      return await db.activity.findAll({
        include: [
          { model: db.user, as: "participant" },
          { model: db.user, as: "host" },
          { model: db.activityType },
        ],
        order: [["date", "ASC"]],
        where: {
          date: {
            [Op.gte]: new Date(),
          },
        },
      })
    },
    tenActivities: async (parent, _args, { db }, info) => {
      return await db.activity.findAndCountAll({
        include: [
          { model: db.user, as: "participant" },
          { model: db.user, as: "host" },
          { model: db.activityType },
        ],
        order: [["date", "ASC"]],
        where: {
          date: {
            [Op.gte]: new Date(),
          },
        },
        limit: 10,
      })
    },

    findActivityType: async (parent, { id }, { db }, info) => {
      return await db.activityType.findByPk(id)
    },
    allActivityTypes: async (parent, _args, { db }, info) => {
      return await db.activityType.findAll()
    },

    /** resolver that checks current user & gives back user data */
    currentUser: async (parent, _args, context, info) => {
      // console.log("context:", context)
      if (!context.auth) {
        throw new ApolloError(
          "This endpoint requires an Authorization header with a valid token"
        )
      }
      try {
        const user = await context.db.user.findByPk(context.auth.userId)
        if (!user) {
          throw new ApolloError("User does not exist")
        }
        console.log("user:", user)
        return user
      } catch (e) {
        throw new ApolloError("Something went wrong", e)
      }
    },
  },

  Mutation: {
    signup: async (
      parent,
      { fullName, email, password, address, gender },
      { db },
      info
    ) => {
      console.log("Name of the requested user:", fullName)
      const existingUser = await db.user.findOne({ where: { email } })
      if (existingUser) {
        throw new UserInputError("Email already in use")
      }
      const newUser = await db.user.create({
        fullName,
        email,
        password: bcrypt.hashSync(password, SALT_ROUNDS),
        address,
        gender,
      })
      const token = toJWT({ userId: newUser.dataValues.id })
      delete newUser.dataValues["password"]
      return { token, user: user.dataValues }
    },

    /** Login resolver with validation set up so an invalid login doesn't reveal whether an email is in fact registered */
    login: async (parent, { email, password }, { db }, info) => {
      const user = await db.user.findOne({ where: { email } })
      if (!user || !bcrypt.compareSync(password, user.password)) {
        throw new UserInputError("User not found or incorrect password")
      }
      delete user.dataValues["password"]
      console.log("what is left of the user?:", user.dataValues)
      const token = toJWT({ userId: user.id })
      return { token, user: user.dataValues }
    },

    /** Create Activity resolver */
    createActivity: async (
      parent,
      {
        title,
        date,
        hostId,
        latitude,
        longitude,
        activityTypeId,
        isPrivate,
        startingTime,
      },
      { db },
      info
    ) => {
      console.log("arguments passed to Create Activity:")
      const newActivity = await db.activity.create({
        title,
        date,
        hostId,
        latitude,
        longitude,
        activityTypeId,
        isPrivate,
        startingTime,
      })
      // if (!newActivity) {
      //   throw new ApolloError("Unable to create activity")
      // }
      return newActivity
    },
  },
}

module.exports = { resolvers }
