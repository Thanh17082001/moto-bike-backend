import express from 'express'
import cartController from '../app/controllers/cart.controller'
const router = express.Router()
router.post('/add', cartController.addProductToCart)
router.post('/all', cartController.getItemByUser)
router.post('/change-quanlity', cartController.changeQuanlity)
router.post('/update-quanlity', cartController.updateQuanlity)
router.post('/delete-quanlity', cartController.deleteProductToCart)

export default router