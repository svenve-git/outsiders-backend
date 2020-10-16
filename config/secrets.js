const dotenv = require("dotenv")
dotenv.config()

module.exports = {
  jwtSecret:
    process.env.JWT_SECRET ||
    "123sadfdfef234dfewef123546576ytgffdc07b4fc531cd305679486696542bc4a378a4691a90a659496a0ae31caf8634934f9d3f72e8d83a0f5b2e1a35f4fec",
}
