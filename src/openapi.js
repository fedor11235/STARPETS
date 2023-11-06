import createHistoryUser from './swagger-endpoint/create-history-user.js'
import updateHistoryUser from './swagger-endpoint/update-history-user.js'
import getHistoryUser from './swagger-endpoint/get-history-user.js'
import { userSheme, idSheme } from './swagger-shemes/user.js'

export default {
  openapi: '3.0.0',
  info: {
    title: 'History service',
    version: '0.0.1',
    description: 'The History API description',
  },
  paths: {
    '/create': createHistoryUser,
    '/update/{id}': updateHistoryUser,
    '/get': getHistoryUser,
  },
  components: {
    schemas: {
      user: userSheme,
      id: idSheme
    }
  }
}