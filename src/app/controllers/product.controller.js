const productService = require('../services/product.service');
const colorService = require('../services/color.service');
const stockService = require('../services/stock.service');

class productController {
    async addProduct(req, res) {
        const product = await productService.add(req.body);
        const color = await colorService.add(req.body);
        const idStock = await stockService.add({
            idProduct: product._id,
            idColor: color._id
        })
        res.json(product);


    }
    async getAllProduct(req, res) {
        const document = await productService.getAll();
        res.send(document);
    }
    async getColorProduct(req, res) {
        const documents = await stockService.getColorProductById(req.params.id);
        let result=[];
        for(let i=0 ; i<documents.length;i++){
            result[i]= await colorService.getById(documents[i].idColor)
        }
        res.send(result)
        
    }
}

module.exports = new productController;