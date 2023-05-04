const typeDb = require('../models/type.model');
class typeService {
    extracttypeData(payload) {
        const types = {
            name: payload.name.toLowerCase(),
        };
        return types;
    }
    async add(data) {
        const types = this.extracttypeData(data);
        return await typeDb.create(types);
    }
    async getAll(){
        return await typeDb.find({})
    }
}
module.exports = new typeService;