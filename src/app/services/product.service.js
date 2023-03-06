const { create } = require("../models/product.model");
const productDb = require("../models/product.model");
class categoryService {
    extractProductData(payload) {
        const products = {
            name: payload.name.toLowerCase(),
            price: payload.price,
            quanlity: payload.quanlity,
            imgUrl: payload.imgUrl,

        };
        return products;
    }
    async add(data) {
        const name = data.name.toLowerCase();
        const product = await productDb.findOne({ name })
        if (!product) {
            return await productDb.create(this.extractProductData(data))
        } else {
            return product;
        }

    }
    async getAll() {
        return await productDb.find({});
    }
}
module.exports = new categoryService();
