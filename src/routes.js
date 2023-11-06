const express = require('express')
const { getUsers, updateUser } = require('./controllers.js')

const router = express.Router();

router.get('/', async (request, response) => {
  const message = await getUsers()
  response.send(message)
});

router.put('/user/update/:userId/:amount', async (request, response) => {
  const { userId, amount } = request.params
  const message = await updateUser(userId, amount)
  response.send(message)
});

module.exports = router;
