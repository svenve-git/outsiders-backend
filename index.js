const express = require("express")
const { typeDefs } = require("./src/schema")
const { resolvers } = require("./src/resolvers")
const { toData, toJWT } = require("./auth/auth")
const { ApolloServer } = require("apollo-server-express")
const db = require("./models")

const PORT = 4000 || process.env.PORT
const app = express()
app.use(express.json())

// Option: create a const auth with middleware logic and pass into context
// Option 2: take req and return user in context

const auth = async ({ req }) => {
  console.log("headers:", req.headers.authorization)
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1]
  console.log("token", token)
  try {
    const auth = toData(token)

    return { auth, db }
  } catch (e) {
    console.log("error:", e)
    return { db }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: auth,
})

server.applyMiddleware({ app })

app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
)

// console.log("server path:", server.graphqlPath)
