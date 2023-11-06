const { idSheme, amountSheme } = require('../shemes/user.js')

module.exports = {
  put: {
    tags: [],
    summary: 'обновление записи',
    description: '',
    parameters: [
      {
        name: "userId",
        in: "path",
        schema: idSheme,
        required: true,
        description: "Id of user to be updated",
      },
      {
        name: "amount",
        in: "path",
        schema: amountSheme,
        required: true,
        description: "amount of user to be updated",
      },
    ],
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
