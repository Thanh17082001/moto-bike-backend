const express = require('express')
const cors = require ('cors');
const route = require('./routes/index.route')
const session = require('express-session')
import passport from 'passport';
import dotenv from 'dotenv'

const app = express();
const db = require('./config/db')
app.use(passport.initialize());
// app.use(express.static(path.join(__dirname,'public')))

app.use(cors({credentials: true, origin: '*'}));
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


dotenv.config()

route(app);


app.listen(process.env.PORT || 3000, () => {console.log('start with http://localhost:3000/')})