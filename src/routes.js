import express from "express";
import { updateUser } from "./controllers.js";

const router = express.Router();

router.put('/user/update/:userId/:amount', async (request, response) => {
  const { userId, amount } = request.params
  const message = await updateUser(userId, amount)
  response.send(message)
});

export default router;
