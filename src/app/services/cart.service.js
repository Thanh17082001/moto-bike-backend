import cartModel from "../models/cart.model"
import mongoose from "mongoose"
exports.cartUser = async ()=>{

}

exports.FindByIdUser = async (userId)=>{
    return await cartModel
                .findOne({idUser: userId})
                .populate('products.idProduct')
}

exports.addNewUserInCart = async (data)=>{
   return await cartModel.create(data)
}

exports.UpdateUserInCart = async (data)=>{
    const exitsUser = await cartModel.findOne({idUser: data.idUser, 'products.idProduct': data.idProduct,})
    if(exitsUser){
        return await cartModel.findOneAndUpdate(
            {idUser:data.idUser, 'products.idProduct':data.idProduct},
            {$inc: { 'products.$.quanlityOrder': 1 }},
            { upsert: true, new: true }
    
        ).lean()
    }
    else{
        return await cartModel.findOneAndUpdate(
            { idUser: data.idUser },
            { $push: { products: data } },
            { upsert: true, new: true }
          ).lean();
    }
 }

exports.changeQuanlity = async (type, data)=>{
    if(type == 'reduce'){
        return await cartModel.findOneAndUpdate(
            {idUser:data.idUser, 'products.idProduct':data.idProduct},
            {$inc: { 'products.$.quanlityOrder': -1 }},
            { upsert: true, new: true }
    
        )
    }
    else{
        return await cartModel.findOneAndUpdate(
            {idUser:data.idUser, 'products.idProduct':data.idProduct},
            {$inc: { 'products.$.quanlityOrder': 1 }},
            { upsert: true, new: true }
        )
    }
} 

exports.updateQuanlity = async ( data) =>{
    return await cartModel.findOneAndUpdate(
        {idUser:data.idUser, 'products.idProduct':data.idProduct},
        {'products.$.quanlityOrder': data.quanlityOrder },
        { upsert: true, new: true }
    )
}

exports.deleteProductToCart = async (data)=>{
    return await cartModel.findOneAndUpdate(
        { idUser: data.idUser, 'products.idProduct': data.idProduct },
        { $pull: { products: { idProduct: data.idProduct } } },
        { upsert: true, new: true }
      );
}
