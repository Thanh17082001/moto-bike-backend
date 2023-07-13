const express = require('express')
const router = express.Router()
const userController = require ('../app/controllers/user.controller')
import passport from 'passport'
userController.loginWithGoogle()



function isLogged(req, res, next){
    if(req.user){
        req.session.auth = {
            ...req.user._doc
        }
        next()
    }else{
        res.send('lỗi đăng nhập')
    }
}



router.get('/google', passport.authenticate('google', { scope: ['profile', 'email']}))
router.get('/google/callback', passport.authenticate('google', { failureRedirect:'/user'}), isLogged,(req , res)=>{
    res.redirect(`http://localhost:3001/home`);
})
router.get('/user-info',(req, res) =>{
    res.json(req.session.auth)
})

router.post('/register', userController.createUser)
router.post('/login', userController.checkLogin)
router.get('/logout', (req, res)=>{
    req.session.auth=undefined
    res.json(true)
})
module.exports=router;