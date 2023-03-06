const express = require('express')
const router = express.Router()
const productController = require ('../app/controllers/product.controller')
router.post('/add', productController.addProduct)
router.get('/:id', productController.getColorProduct)
router.get('/', productController.getAllProduct)
module.exports=router;