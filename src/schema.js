const { gql } = require("apollo-server")

/**
 * To Do:
 * add scalar types Date / Time / Location?
 */

const typeDefs = gql`
  scalar Date
  scalar Time

  type User {
    id: ID!
    fullName: String!
    email: String!
    password: String!
    address: String!
    gender: String!
    activities: [Activity]
  }

  type Activity {
    id: ID!
    title: String!
    date: Date!
    hostId: Int
    host: User
    participants: [User]
    latitude: Float!
    longitude: Float!
    activityType: ActivityType
    isPrivate: Boolean
    startingTime: String!
  }

  type ActivityType {
    id: ID!
    name: String
    description: String
    icon: String
  }

  type LoginResponse {
    token: String!
    user: User!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    findUser(id: Int!): User
    allUsers: [User]
    currentUser: User
    findActivity(id: Int!): Activity
    allActivities: [Activity]
    tenActivities: [Activity]
    findActivityType(id: Int!): ActivityType
    allActivityTypes: [ActivityType]
  }

  type Mutation {
    signup(
      fullName: String!
      email: String!
      password: String!
      address: String!
      gender: String!
    ): LoginResponse!
    login(email: String!, password: String!): LoginResponse!
    createActivity(
      title: String!
      date: Date!
      hostId: Int!
      latitude: Float!
      longitude: Float!
      activityTypeId: Int!
      isPrivate: Boolean!
      startingTime: String!
    ): Activity
  }
`

module.exports = { typeDefs }
