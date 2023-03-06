const stockDb = require("../models/stock.model");
class categoryService {
  extractStockData(payload) {
    const stock = {
      idColor: payload.idColor,
      idProduct: payload.idProduct,
    };
    return stock;
  }
  async add(data) {
    const stocks= await stockDb.find(data.idProduct,data.idColor);
    if(stocks.length === 0){
      return await stockDb.create(this.extractStockData(data));
    }else{
      return stocks;
    }
  }
  async getColorProductById(idProduct) {
    return await stockDb.find({ idProduct});
  }
}

module.exports = new categoryService();
