import cartSevice from '../services/cart.service'
exports.addProductToCart= async (req, res)=>{
    try {
        if(req.body.userId == req.session.auth?._id){
            const userInCart= await cartSevice.FindByIdUser(req.session.auth._id)
            if(userInCart){
                const data={
                    idProduct:req.body.productId,
                    quanlityOrder:1,
                    idUser:req.session.auth._id
                }
                const updateCartForUser = await cartSevice.UpdateUserInCart(data)
                res.json(updateCartForUser)
            }
            else{
                const data={
                    products:[
                        {
                            idProduct:req.body.productId,
                            quanlityOrder:1
                        }
                    ], 
                    idUser:req.session.auth._id
                }
                const createCartForNewUser = await cartSevice.addNewUserInCart(data)
                res.json(createCartForNewUser)
            }
        }
          
    } catch (error) {
        console.log(error);
    }  
}


exports.getItemByUser = async (req, res)=>{
    try {
        if(req.session.auth){
            const itemsCart = await cartSevice.FindByIdUser(req.body.idUser)
            res.json(itemsCart);
        }
    } catch (error) {
        console.log(error);
    }
}

exports.changeQuanlity = async (req, res) => {
   try {
    const cart = await cartSevice.changeQuanlity(req.query.type, req.body)
    res.json(cart)
   } catch (error) {
    console.log(error);
   }
}

exports.updateQuanlity = async (req, res) =>{
    try {
        const cartUpdate= await cartSevice.updateQuanlity(req.body)
        res.json(cartUpdate)
    } catch (error) {
        console.log(error);
    }
}

exports.deleteProductToCart = async (req, res)=>{
    try {
        const data ={
            idProduct: req.body.idProduct,
            idUser: req.session.auth._id
        }
        const deleteProduct=await cartSevice.deleteProductToCart(data);
        res.json(deleteProduct)
    } catch (error) {
        console.log(error);
    }
}