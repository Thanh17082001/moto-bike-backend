const express = require('express')
const router = express.Router()
const productController = require ('../app/controllers/product.controller')
router.post('/add', productController.addProduct)
router.get('/equal-zero', productController.getProductQuanlityEqualToZero)
router.get('/color/:id', productController.getColorProduct)
router.get('/company/:id', productController.getProductByCompany)
router.get('/category/:id', productController.getProductByCategory)
router.get('/type/:id', productController.getProductByType)
router.get('/search/:name', productController.search)
router.get('/trash', productController.trash)
router.get('/:id', productController.getProductById)
router.get('/delete/:id', productController.deleteProduct)
router.get('/restore/:id', productController.restoreProduct)
router.patch('/update/:id', productController.updateProduct)
router.get('/', productController.getAllProduct)
module.exports=router