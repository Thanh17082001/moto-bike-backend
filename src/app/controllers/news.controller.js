const newsService= require ('../services/news.service');
class newsController{
    async addNews(req, res, next){
        const document = await newsService.add(req.body);
        res.send(document)
    }
   
    async getAll(req, res){
        const document= await newsService.getAll();
        res.send(document)
    }

    async deleteNews(req, res){
        const document = await newsService.deleteNews(req.params.id)
        res.send(document)
    }
}

module.exports =new newsController;