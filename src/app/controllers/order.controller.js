const orderService = require("../services/order.service");
const productService = require("../services/product.service");
class orderController {
  async addOrder(req, res) {
    await orderService.addOrder(req.body);
    const idOrder = await orderService.findIdOrderByStatus("pack");
    const item = req.body.productCart;
    for (var i = 0; i < item.length; i++) {
      const dataOrderDetail = { idOrder, ...item[i] };
      await orderService.addOrderDetail(dataOrderDetail);
      await productService.reduceQuanlity(
        dataOrderDetail._id,
        dataOrderDetail.quanlityOrder
      );
      await orderService.updateStatusOrder(idOrder._id, "accepted");
    }
    res.send(req.body);
  }

  async historyOrder(req, res) {
    const idOrders = await orderService.findByIdUser(req.params.id);
    const result = [];
    for (let i = 0; i < idOrders.length; i++) {
      const products = [];
      var document = await orderService.findByIdOrder(idOrders[i]._id);
      for (let j = 0; j < document.length; j++) {
        products.push(document[j]);
      }
      result.push({
        InfoOrder: idOrders[i],
        products,
      });
    }
    res.send(result);
  }

  async GetAllOrder(req, res) {
    const document = await orderService.findAllOrder();
    res.send(document);
  }
  async getOrderDetailById(req, res) {
    var document = await orderService.findByIdOrder(req.params.idOrder);
    var result = [];
    var a = [];
    for (let j = 0; j < document.length; j++) {
      const b = await productService.getProductById(document[j].idProduct);
      result.push({
        orderdetail: document[j],
        products: b[0],
      });
    }
    res.send(result);
  }

  async statisticalDays(req, res) {
    const document = await orderService.findAllOrder();
    var result = [];
    var data = [];
    var sum = 0;
    for (var i = 0; i < document.length; i++) {
      if (req.body.week) {
        const day = new Date(req.body.week);
        if (document[i].createdAt.getDay() <= day.getDay()) {
          result.push(document[i]);
        }
      } else if (req.body.day) {
        const day = new Date(req.body.day);
        if (document[i].createdAt.getDate() == day.getDate()) {
          result.push(document[i]);
        }
      } else {
        if (document[i].createdAt.getMonth() + 1 == req.body.month) {
          result.push(document[i]);
        }
      }
    }
    for (var j = 0; j < result.length; j++) {
      var temp = await orderService.findByIdOrder(result[j]._id);
      data.push(temp[0]);
      sum += data[j].total;
    }

    res.json(result);
    // cn:0, t2:1, t3:2, t4:3, t5:4, t6:5, t7:6
  }
}

module.exports = new orderController();
