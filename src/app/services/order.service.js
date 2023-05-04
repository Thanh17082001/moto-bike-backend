const orderDb = require('../models/order.model');
const orderDetailDb = require('../models/order-detail.moder');
class newsService {
    extractOrderData(payload) {
        const order = {
            idUser: payload.idUser,
            phone: payload.phone,
            address: payload.address,
            nameCustomer: payload.nameCustomer,
            // start status is packing (paking, accepted, shipping, delivered)
        };
        return order;
    }

    extractOrderDetailData(payload) {
        const orderDetai = {
            idOrder: payload.idOrder,
            idProduct: payload._id,
            quanlityOrder: payload.quanlityOrder,
            total: payload.quanlityOrder*payload.price
        };
        return orderDetai;
    }

    async addOrder(data) {
        const order = this.extractOrderData(data);
        return await orderDb.create(order);
    }

    async findAllOrder(){
        return await orderDb.find({})
    }
    async addOrderDetail(data) {
        const orderDetail = this.extractOrderDetailData(data);
        return await orderDetailDb.create(orderDetail);
    }

    async updateStatusOrder(id, status) {
        return await orderDb.findByIdAndUpdate(id, { status: status })
    }

    async findIdOrderByStatus(status) {
        return orderDb.findOne({ status })
    }

    async findByIdUser(idUser){
        return await orderDb.find({idUser})
    }
    
    async findByIdOrder(idOrder){
        return await orderDetailDb.find({idOrder})
    }

    async statistical(){
        return await orderDb.find()
      }
}
module.exports = new newsService;