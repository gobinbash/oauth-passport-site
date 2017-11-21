const express = require('express')
require('dotenv').config()
const PassportConfig = require('./config/passport')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')

const app = express()

// Mongoose connection

const db = mongoose.connect(process.env.MONGO_DB,{ useMongoClient: true})

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('> MongoDb Connected')
});

// Set view engine
app.set('view engine','ejs')

// Static middleware

app.use(express.static('public'));

// Cookie

app.use(cookieSession({
    maxAge: 24 * 60 * 60  * 1000,
    keys:[
        process.env.COOKIE_KEY
    ]
}))

// Initialize Passport 

app.use(passport.initialize())

app.use(passport.session())

// App routes

app.get('/', (req, res) => {
    res.render('home', {title:'Welcome to Home page'})
})


// Auth routes

app.use('/auth', require('./routes/auth-routes'))

app.listen(3000, () => {
    console.log('> App running at port 3000')
})
