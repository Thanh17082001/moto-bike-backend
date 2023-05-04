const express = require('express')
const router = express.Router()
const categoryController = require ('../app/controllers/category.controller')
router.post('/add', categoryController.addCategory)
router.get('/', categoryController.getAll)
module.exports=router;