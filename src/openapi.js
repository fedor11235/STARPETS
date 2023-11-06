const GetUser = require('./swagger/endpoint/get-user.js')
const updateUser = require('./swagger/endpoint/update-user.js')
const { idSheme, amountSheme } = require('./swagger/shemes/user.js')

module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'History service',
    version: '0.0.1',
    description: 'The History API description',
  },
  paths: {
    '/': GetUser,
    '/update/{userId}/{amount}': updateUser,
  },
  components: {
    schemas: {
      idUser: idSheme,
      amount: amountSheme
    }
  }
}