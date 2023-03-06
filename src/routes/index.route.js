const userRoute = require('./Product.route')
const categoryRoute = require('./Category.route')

function route(app){
    app.use('/product',userRoute);
    app.use('/category',categoryRoute);
};
module.exports=route