const categoryService= require ('../services/category.service');
class categoryController{
    async addCategory(req, res, next){
        const document = await categoryService.add(req.body);
        res.send(document)
    }
    async findById(req, res){
        const document = await categoryService.getById(req.params.id)
        res.send(document)
    }
}

module.exports =new categoryController;