const productService = require("../services/product.service");

class productController {
    async addProduct(req, res) {
            const product = await productService.add(req.body);
            res.json(product);
    }
    async getColorProduct(req, res) {
        const colorVlues = await colorService.getById(req.params.id);
        res.send(colorVlues)
    }
    async getAllProduct(req, res) {
        const document = await productService.getAll();
        res.send(document);
    }

    async getProductQuanlityEqualToZero(req, res) {
        const document = await productService.getProductEqualToZero();
        res.send(document);
    }

    async getProductByCompany(req, res) {
        const document = await productService.getProductByCompany(req.params.id);
        res.send(document);
    }
    async getProductByCategory(req, res) {
        const document = await productService.getProductByCategory(req.params.id);
        res.send(document);
    }
    async getProductByType(req, res) {
        const document = await productService.getProductByType(req.params.id);
        res.send(document);
    }
    async deleteProduct(req, res){
        const document = await productService.delete(req.params.id);
        res.send(document);
    }
    async restoreProduct(req, res){
        const document = await productService.restore(req.params.id);
        res.send(document);
    }
    async trash(req, res){
        const document = await productService.trash();
        res.send(document);
    }

    async updateProduct(req, res){
        const document = await productService.updateProduct(req.params.id,req.body)
        res.send(document);
    }
    async getProductById(req, res){
        const document =await productService.getProductById(req.params.id);
        res.send(document[0])
    }
    
    async search(req, res){
        const name = req.params.name.toLowerCase()
        const document = await productService.findByName(name)
        res.send(document);
    }

}

module.exports = new productController();
