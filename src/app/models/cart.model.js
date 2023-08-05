import mongoose from 'mongoose';
const { Schema } = mongoose;

const cartSchema = new Schema({
  idUser: {
    type: Schema.Types.ObjectId,
    ref:'user'
  },
  products: [
    {
        _id: false,
        idProduct:{type: Schema.Types.ObjectId, ref:'product'},
        quanlityOrder:Number
    }
  ],
}, {timestamps: true});

export default mongoose.model('cart', cartSchema)
