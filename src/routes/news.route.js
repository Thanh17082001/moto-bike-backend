const express = require('express')
const router = express.Router()
const newsController = require ('../app/controllers/news.controller')
router.post('/add', newsController.addNews)
router.delete('/delete/:id', newsController.deleteNews)
router.get('/', newsController.getAll)
module.exports=router;