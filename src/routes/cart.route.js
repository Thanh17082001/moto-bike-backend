import express from 'express'
import cartController from '../app/controllers/cart.controller'
const router = express.Router()
router.post('/add', cartController.addProductToCart)

export default router