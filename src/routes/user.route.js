const express = require('express')
const router = express.Router()
const userController = require ('../app/controllers/user.controller')
router.post('/register', userController.createUser)
router.post('/login', userController.checkLogin)
module.exports=router;