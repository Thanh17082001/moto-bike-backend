const express = require('express')
const router = express.Router()
const categoryController = require ('../app/controllers/category.controller')
router.post('/add', categoryController.addCategory)
router.get('/:id', categoryController.findById)
module.exports=router;