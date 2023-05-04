const categoryService= require ('../services/category.service');
class categoryController{
    async addCategory(req, res, next){
        const document = await categoryService.add(req.body);
        res.send(document)
    }
    async findByName(data){
        const document = await categoryService.getByName(data)
        res.send(document)
    }
    async getAll(req, res){
        const document= await categoryService.getAll();
        res.send(document)
    }
}

module.exports =new categoryController;