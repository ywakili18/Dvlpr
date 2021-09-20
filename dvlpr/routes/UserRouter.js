const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetProfiles)
Router.get('/:user_id', controller.GetUserProfile)
Router.post('/new_user', controller.CreateUser)

module.exports = Router
