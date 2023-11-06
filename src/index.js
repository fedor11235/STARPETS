const express = require('express')
const cors = require('cors')
const db = require('../models')
const swaggerUi = require('swagger-ui-express')
const swaggerDoc = require('./openapi.js')
require('dotenv/config')

const router =require('./routes.js')

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
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
app.use(router);

app.listen(port, () => console.log(`Running on port ${port}`))