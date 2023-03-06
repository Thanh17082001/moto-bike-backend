const categoryDb= require ('../models/category.model');
class categoryService{
    async add(data){
        return await categoryDb.create(data)
    }
    async getById(id){
        return await categoryDb.findById(id)
    }
}
module.exports =new categoryService;