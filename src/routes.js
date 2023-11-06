import express from "express";
import { createUser, updateUser, getHistory } from "./controllers.js";

const router = express.Router();

router.post('/create', async (request, response) => {
  console.log('route', request.body)
  const message = await createUser(request.body)
  response.send(message)
});

router.put('/update/:id', async (request, response) => {
  const { id } = request.params
  const message = await updateUser(id, request.body)
  response.send(message)
});

router.get('/get', async (request, response) => {
  const message = await getHistory(request.query)
  response.send(message)
});

export default router;
