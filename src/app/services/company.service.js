const companyDb = require('../models/company.model');
class companyService {
    extractCompanyData(payload) {
        const companies = {
            name: payload.name.toLowerCase(),
        };
        return companies;
    }
    async add(data) {
        const companies = this.extractCompanyData(data);
        return await companyDb.create(companies);
    }
    async getAll(){
        return await companyDb.find({})
    }
}
module.exports = new companyService;