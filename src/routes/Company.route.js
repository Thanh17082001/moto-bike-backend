const express = require('express')
const router = express.Router()
const companyController = require ('../app/controllers/company.controller')
router.post('/add', companyController.addCompany)
router.get('/', companyController.getAll)
module.exports=router;