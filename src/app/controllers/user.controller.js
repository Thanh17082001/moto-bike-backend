const userService= require ('../services/user.service');
const bcrypt = require('bcrypt');
class userController{
    async createUser(req, res){
        const salt = await bcrypt.genSalt(10);
        const passHashed= await bcrypt.hash(req.body.password, salt);
        const email= req.body.email
        const document = await userService.add({email, password:passHashed,name:req.body.name})
        res.send(document)
    }
   
    async checkLogin(req, res){
        const document= await userService.getByEmailAndPass(req.body);
        if(document){
            const validPassword = await bcrypt.compare(req.body.password,document.password);
            if(validPassword){
                const document= await userService.getByEmailAndPass(req.body);
                res.send(document);
            }else{ 
                res.json(null);
            }
        }
        else{
            res.json(document)
        }
       
    }
}

module.exports =new userController;