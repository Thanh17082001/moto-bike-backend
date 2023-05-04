const categoryDb = require('../models/category.model');
class categoryService {
    extractCategoryData(payload) {
        const catregories = {
            name: payload.name.toLowerCase(),
        };
        return catregories;
    }
    async add(data) {
        const categories = this.extractCategoryData(data);
        return await categoryDb.create(categories);
    }
    async getByName(data) {
        const name= data.name.toLowerCase();
        return await categoryDb.findOne({name});
    }
    async getAll(){
        return await categoryDb.find({})
    }
}
module.exports = new categoryService;