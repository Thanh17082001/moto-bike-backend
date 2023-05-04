const express = require('express')
const router = express.Router()
const typeController = require ('../app/controllers/type.controller')
router.post('/add', typeController.addType)
router.get('/', typeController.getAll)
module.exports=router;