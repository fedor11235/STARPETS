import updateUser from './swagger/endpoint/update-user.js'
import { idSheme, amountSheme } from './swagger/shemes/user.js'

export default {
  openapi: '3.0.0',
  info: {
    title: 'History service',
    version: '0.0.1',
    description: 'The History API description',
  },
  paths: {
    '/update/{userId}/{amount}': updateUser,
  },
  components: {
    schemas: {
      idUser: idSheme,
      amount: amountSheme
    }
  }
}