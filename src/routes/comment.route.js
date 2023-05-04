const express = require('express')
const router = express.Router()
const commentController = require ('../app/controllers/comment.controller')
router.post('/add', commentController.addComment)
router.get('/:id',commentController.getCommentByIdProduct)
module.exports=router;