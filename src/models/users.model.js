module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define("users", {
    balance: {
      type: Sequelize.INT
    },
  })

  return Users
}