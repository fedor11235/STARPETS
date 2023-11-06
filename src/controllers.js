// import db from '../models/index.js';
const { Users } = require('../models')

// const Users = db.Users;
// const Op = db.Sequelize.Op;

module.exports.getUsers = async (id, amount) => {
  console.log(Users)
  const users = await Users.findAll()
  return users;
}

module.exports.updateUser = async (id, amount) => {
  const user = await Users.update(
    { amount: amount }, 
    { where: { id: id }})

  return user;
}
