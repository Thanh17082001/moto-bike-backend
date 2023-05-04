const typeService = require("../services/type.service")
class typeController {
  async addType(req, res, next) {
    const document = await typeService.add(req.body);
    res.send(document);
  }
  async getAll(req, res){
    const document = await typeService.getAll();
    res.send(document)
  }
}

module.exports = new typeController();
