const companyService = require("../services/company.service")
class companyController {
  async addCompany(req, res, next) {
    const document = await companyService.add(req.body);
    res.send(document);
  }
  async getAll(req, res){
    const document = await companyService.getAll();
    res.send(document);
  }
}

module.exports = new companyController();
