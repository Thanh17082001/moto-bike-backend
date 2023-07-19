const express = require('express')
const router = express.Router()
const userController = require ('../app/controllers/user.controller')
import passport from 'passport'
userController.loginWithGoogle()
userController.loginWithFacebook()



function isLogged(req, res, next){
    if(req.user){
        req.session.auth = {
            ...req.user
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

router.get('/facebook', passport.authenticate('facebook', { scope: ['user_friends', 'manage_pages'] }))
router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login', successRedirect:'/user/info' }))
router.get('info', (req , res)=>{
    // res.redirect(`http://localhost:3001/home`);
    console.log(req.user)
    res.redirect('/')
})
router.post('/register', userController.createUser)
router.post('/login', userController.checkLogin)
router.get('/logout', (req, res)=>{
    req.session.auth=undefined
    res.json(true)
})
module.exports=router;