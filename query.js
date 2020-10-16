const User = require("./models").user
const Activity = require("./models").activity

const someQuery = async () => {
  try {
    const activity = await User.findByPk(3, {
      include: [
        {
          model: Activity,
          as: "host",
          include: [{ model: User, as: "participant" }],
        },
      ],
    })
    console.log(activity.get({ plain: true }))
  } catch (e) {
    console.log(e.message)
  }
}

someQuery()
