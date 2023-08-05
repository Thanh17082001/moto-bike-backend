const { create } = require("../models/product.model");
const productDb = require("../models/product.model");
class categoryService {
  extractProductData(payload) {
    const products = {
      idCategory: payload.idCategory,
      idCompany: payload.idCompany,
      idType: payload.idType,
      color: payload.color,
      name: payload.name.toLowerCase(),
      description: payload.description,
      price: payload.price,
      quanlity: payload.quanlity,
      imgUrl: payload.imgUrl,
    };
    return products
  }
  async add(data) {
    const products = this.extractProductData(data);
    return await productDb.create(products);
  }

  async getAll() {
    return await productDb.find({ deleted: false , quanlity:{$gt:0}});
  }

  async getProductEqualToZero() {
    return await productDb.find({ deleted: false , quanlity:{$eq:0}});
  }

  async getProductById(id) {
    return await productDb.find({ deleted: false, _id:id }).lean();
  }
  async getProductByCompany(idCompany) {
    return await productDb.find({ idCompany, deleted: false , quanlity:{$gt:0}});
  }
  async getProductByCategory(idCategory) {
    return await productDb.find({ idCategory, deleted: false ,quanlity:{$gt:0}});
  }

  async getProductByType(idType) {
    return await productDb.find({ idType, deleted: false , quanlity:{$gt:0} });
  }

  async delete(id) {
    return await productDb.findByIdAndUpdate(id, { deleted: true });
  }
  async restore(id) {
    return await productDb.findByIdAndUpdate(id, { deleted: false });
  }
  async trash() {
    return await productDb.find({ deleted: true });
  }

  async updateProduct(id, data) {
    const result= await productDb.findByIdAndUpdate(id, data, {
      new: true,
    });
    return result
  }

  async findByName(name){
    return await productDb.find({name: { $regex: '.*' + name + '.*' }, quanlity:{$gt:0}});
  }
  async getQuanlity(_id){
    return await productDb.findById({_id})

  }
  async reduceQuanlity(_id, quanlityOrder){
    const data= await this.getQuanlity(_id)
    const quanlity= data.quanlity- quanlityOrder
    const result = await productDb.findByIdAndUpdate(_id,{quanlity:quanlity})
    return result
  }

  
}
module.exports = new categoryService();
