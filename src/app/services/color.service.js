const colorDb = require("../models/color.model");
class categoryService {
    extractColorData(payload) {
        const color = {
            nameColor: payload.nameColor.toLowerCase(),
            colorCode: payload.colorCode,
        };
        return color;
    }
    async add(data) {
        const nameColor= data.nameColor.toLowerCase();
        const colors = await colorDb.findOne({nameColor});
        if(!colors){
            return await colorDb.create(this.extractColorData(data))
        }else{
            return colors;
        }
    }

    async getById(_id) {
        return await colorDb.findById({_id});
    }
}

module.exports = new categoryService();
