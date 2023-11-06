import { userSheme, idSheme } from '../swagger-shemes/user.js'

export default {
  put: {
    tags: [],
    summary: 'обновление записи',
    description: '',
    parameters: [
      {
        name: "id",
        in: "path",
        schema: idSheme,
        required: true,
        description: "Id of user to be updated",
      },
    ],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: userSheme
        }
      },
    },
    responses: {
      200: {
        description: 'user updated',
      },
      400: {
        description: 'bad request',
      }
    }
  }
}
