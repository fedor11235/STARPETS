import { userSheme } from '../swagger-shemes/user.js'

export default {
  post: {
    tags: [],
    summary: 'создание записи',
    description: '',
    parameters: [],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: userSheme
        }
      },
    },
    responses: {
      201: {
        description: 'user and record created',
      },
      400: {
        description: 'bad request',
      }
    }
  }
}
