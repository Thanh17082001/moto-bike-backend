const newsDb = require('../models/news.model');
class newsService {
    extractNewsData(payload) {
        const news = {
            name: payload.name.toLowerCase(),
            imgUrl: payload.imgUrl,
            description: payload.description,
        };
        return news;
    }
    async add(data) {
        const news = this.extractNewsData(data);
        return await newsDb.create(news);
    }
    
    async getAll(){
        return await newsDb.find({})
    }
    async deleteNews(id){
        return await newsDb.deleteOne({_id:id})
    }
}
module.exports = new newsService;