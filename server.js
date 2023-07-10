const express = require('express')
const cors = require ('cors');
const route = require('./src/routes/index.route')
const session = require('express-session')
const app = express();
const db = require('./src/config/db') 
// app.use(express.static(path.join(__dirname,'public')))
app.use(cors());
db.connect();
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }))

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}));

route(app);


app.listen(process.env.PORT || 3000, () => {console.log('start with http://localhost:3000/')})