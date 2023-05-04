const userDb = require('../models/user.model');
const bcrypt = require('bcrypt');
class userService {
    extractUserData(payload) {
        const user = {
            name: payload.name.toLowerCase(),
            email:payload.email,
            password:payload.password
        };
        return user;
    }
    async add(data) {
        const news = this.extractUserData(data);
        return await userDb.create(news);
    }
    
    async getByEmailAndPass(data){
        const result =await userDb.findOne({email:data.email});
        return result
    }
    async checkPass(password,passInDb){
        return bcrypt.compare(password, passInDb);
    }
}
module.exports = new userService;