const { gql } = require("apollo-server")

const typeDefs = gql`
  type User {
    id: ID!
    fullName: String!
    email: String!
    password: String!
    address: String!
    gender: String!
  }

  type Activity {
    id: ID!
    title: String!
    date: String!
    host: User!
    participants: [User]
    groupSize: Int
    latitude: Int!
    longitude: Int!
    activityTypeId: Int!
    private: Boolean
    startingTime: Int!
    endingTime: Int
  }

  type ActivityType {
    id: ID!
    name: String
    description: String
    icon: String
  }

  type Login {
    token: String!
    user: User!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    user(id: Int!): User
    users: [User]
    activity(id: Int!): Activity
    activities: [Activity]
    activityType(id: Int!): ActivityType
    activityTypes: [ActivityType]
  }

  type Mutation {
    signup(
      fullName: String!
      email: String!
      password: String!
      address: String!
      gender: String!
    ): Login!
    login(email: String!, password: String!): Login!
  }
`

module.exports = { typeDefs }
