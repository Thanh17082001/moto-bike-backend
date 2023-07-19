const productRoute = require('./Product.route')
const categoryRoute = require('./Category.route')
const newsRoute = require('./news.route')
const commentRoute = require('./comment.route')
const orderRoute = require('./order.route')
const userRoute = require('./user.route')
const companyRoute = require('./Company.route')
const typeRoute = require('./type.route')

import cartRoute from './cart.route'

function route(app){
    app.use('/product',productRoute);
    app.use('/category',categoryRoute);
    app.use('/news',newsRoute);
    app.use('/order',orderRoute);
    app.use('/comment',commentRoute);
    app.use('/user',userRoute);
    app.use('/company',companyRoute);
    app.use('/type',typeRoute);
    app.use('/cart',cartRoute);
};
module.exports=route