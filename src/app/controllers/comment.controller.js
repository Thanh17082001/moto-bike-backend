const commentService= require ('../services/comment.service');
class commentController{
    async addComment(req, res, next){
        const document = await commentService.add(req.body);
        res.send(document)
    }
    
    async getCommentByIdProduct(req, res){
        const document = await commentService.getCommentByidProduct(req.params.id)
        res.send(document)
    }
}

module.exports =new commentController;