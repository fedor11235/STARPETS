import Sequelize from 'sequelize'
import dbConfig from '../config/db.config.js'

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
})

db.Sequelize = Sequelize
db.sequelize = sequelize

db.tutorials = require("./users.model.js")(sequelize, Sequelize)

module.exports = db

const db = {}