const userService= require ('../services/user.service');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
import passport from 'passport';
const bcrypt = require('bcrypt');
import dotenv from 'dotenv'
dotenv.config()
class userController{
    async createUser(req, res){
        const salt = await bcrypt.genSalt(10);
        const passHashed= await bcrypt.hash(req.body.password, salt);
        const email= req.body.email
        const document = await userService.add({email, password:passHashed,name:req.body.name})
        res.send(document)
    }
   
    async checkLogin(req, res){
        try {
            const user = await userService.getByEmail(req.body)
            if(user){
                const passCompare = await bcrypt.compare(req.body.password, user.password)
               if(passCompare){
                req.session.auth={
                    ...user
                }
                res.json(req.session.auth._doc)
               }else{
                    res.json(null)
               }
            }
            else{
                res.json('ko co');
            }
        } catch (error) {
            res.json(error);
        }
        
    }

    loginWithGoogle(){
        try {
            passport.use(new GoogleStrategy({
                clientID: process.env.CLIENT_ID, // cau hinh ID va secret cua gg
                clientSecret: process.env.CLIENT_SECRET,
                callbackURL: "http://localhost:3000/user/google/callback"
              },
                    async function(accessToken, refreshToken, profile, done) {
                        let user = await userService.getByEmail({email: profile.emails[0].value})
                        if(user){
                           return done(null, user) 
                        }
                        else{
                            const data ={
                                email:profile.emails[0].value,
                                name: profile.displayName,
                                
                            }
                             user = await userService.add(data)
                            return done(null, user) 
                        }
    
                    }
                )
            );
            
            passport.serializeUser(function(user, done) {
                done(null, {user:user});
              });
              
              passport.deserializeUser(function(user, done) {
                done(null, user);
              });
            } catch (error) {
                console.log(error);
            }
            
    }
}

module.exports =new userController;