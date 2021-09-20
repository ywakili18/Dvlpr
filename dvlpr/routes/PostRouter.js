const Router = require('express').Router()
const controller = require('../controllers/PostController')

Router.get('/', controller.GetProfiles)
Router.get('/:post_id', controller.GetUserProfile)

module.exports = Router
