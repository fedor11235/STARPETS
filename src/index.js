import express from 'express'
import db from "./models"
import bodyParser from 'body-parser'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerDoc from './openapi.js';
import 'dotenv/config'

import router from "./routes.js";


const port = process.env.PORT

const app = express()

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message)
  })
  
app.use(cors())
app.use(bodyParser.json())
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
app.use(router);

app.listen(port, () => console.log(`Running on port ${port}`))