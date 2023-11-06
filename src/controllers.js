const { Users } = require('../models')

module.exports.getUsers = async () => {
  return await Users.findAll()
}

module.exports.updateUser = async (id, amount) => {
  const user = await Users.findOne({ where: { id: Number(id) }})
  const balance = user.balance - Number(amount)
  if(balance < 0) {
    return 'средств на балансе недостаточно'
  }
  await Users.update(
    { balance: balance }, 
    { where: { id: Number(id) }})
  return 'с баланса успешно списаны деньги'
}
