import cartSevice from '../services/cart.service'

exports.addProductToCart=(req, res)=>{
    res.json({
        idProduct:req.body.productId,
        idUser:req.session.auth.name
    })
}