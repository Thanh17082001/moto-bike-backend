const commentDb = require('../models/comment.model');
class commentService {
    extractCommentData(payload) {
        const comment = {
           idUser:payload.idUser,
           idProduct:payload.idProduct,
           content:payload.content,
           username:payload.username,
        };
        return comment;
    }
    async add(data) {
        const comment = this.extractCommentData(data);
        return await commentDb.create(comment);
    }
    async getCommentByidProduct(idProduct){
        return await commentDb.find({idProduct:idProduct})
    }
}
module.exports = new commentService;