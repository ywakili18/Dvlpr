const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetProfiles)
Router.get('/:userId', controller.GetUserProfile)

module.exports = Router
