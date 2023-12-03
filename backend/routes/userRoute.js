const { signupController, loginController } = require('../controllers/userController');
const express = require('express');

const routes = express.Router();

routes.post('/signup',signupController)
routes.post('/login',loginController)


//exporting modules
module.exports = routes
