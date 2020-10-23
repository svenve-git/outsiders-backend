"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "activityTypes",
      [
        {
          name: "Walking",
          description:
            "Walking (also known as ambulation) is one of the main gaits of locomotion among legged animals. Walking is typically slower than running and other gaits. Walking is defined by an 'inverted pendulum' gait in which the body vaults over the stiff limb or limbs with each step.",
          icon: "https://emojipedia.org/person-walking/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Running",
          description:
            "Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot. Running is a type of gait characterized by an aerial phase in which all feet are above the ground (though there are exceptions).",
          icon: "https://emojipedia.org/person-walking/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cycling",
          description:
            "Cycling, also called bicycling or biking, is the use of bicycles for transport, recreation, exercise or sport.[1] People engaged in cycling are referred to as cyclists, bicyclists or bikers",
          icon: "https://emojipedia.org/person-walking/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Swimming",
          description:
            "Swimming is the self-propulsion of a person through water, usually for recreation, sport, exercise, or survival. ",
          icon: "https://emojipedia.org/person-walking/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fitness",
          description: "Any type of fitness workout.",
          icon: "https://emojipedia.org/person-walking/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Football",
          description:
            "Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football normally means the form of football that is the most popular where the word is used.",
          icon: "https://emojipedia.org/person-walking/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hockey",
          description:
            "Hockey is a sport in which two teams play against each other by trying to manoeuvre a ball or a puck into the opponent's goal using a hockey stick. There are many types of hockey such as bandy, field hockey, ice hockey and rink hockey.",
          icon: "https://emojipedia.org/person-walking/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tennis",
          description:
            "Tennis is a racket sport that can be played individually against a single opponent (singles) or between two teams of two players each (doubles). Each player uses a tennis racket that is strung with cord to strike a hollow rubber ball covered with felt over or around a net and into the opponent's court. The object of the game is to maneuver the ball in such a way that the opponent is not able to play a valid return. The player who is unable to return the ball will not gain a point, while the opposite player will.",
          icon: "https://emojipedia.org/person-walking/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Basketball",
          description:
            "Basketball, colloquially referred to as hoops,[1] is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter) through the defender's hoop (a basket 18 inches (46 cm) in diameter mounted 10 feet (3.048 m) high to a backboard at each end of the court) while preventing the opposing team from shooting through their own hoop.",
          icon: "https://emojipedia.org/person-walking/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Volleyball",
          description:
            "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules.[1] It has been a part of the official program of the Summer Olympic Games since Tokyo 1964.",
          icon: "https://emojipedia.org/person-walking/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rugby football",
          description:
            "Rugby football is a collective name for the family of team sports of rugby union and rugby league, as well as the earlier forms of football from which both games, Association football, Australian rules football, and Gridiron football evolved. Canadian football (Grey Cup still has Rugby Football written on it), and to a lesser extent American football were also broadly considered forms of rugby football but are seldom now referred to as such.",
          icon: "https://emojipedia.org/person-walking/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Frisbee",
          description:
            "Ultimate, also and originally known as ultimate Frisbee, is a low-contact team sport played with a flying disc (Frisbee). ",
          icon: "https://emojipedia.org/person-walking/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tai Chi",
          description:
            "Tai Chi is an internal Chinese martial art practiced for both its defense training, its health benefits and meditation. The term taiji is a Chinese cosmological concept for the flux of yin and yang, and 'quan' means fist. ",
          icon: "https://emojipedia.org/person-walking/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("activityTypes", null, {})
  },
}
