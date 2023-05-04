const express = require('express')
const router = express.Router()
const orderController = require ('../app/controllers/order.controller')
router.post('/add-order', orderController.addOrder)
router.post('/statistical/', orderController.statisticalDays)
router.get('/history-order/:id',orderController.historyOrder)
router.get('/order-detail/:idOrder',orderController.getOrderDetailById)
router.get('/',orderController.GetAllOrder)
module.exports=router;