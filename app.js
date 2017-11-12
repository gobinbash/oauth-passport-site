const express = require('express')
require('dotenv').config()
const PassportConfig = require('./config/passport')
const mongoose = require('mongoose')

const app = express()

// Mongoose connection

const db = mongoose.connect('mongodb://127.0.0.1:27017/oauth-test',{ useMongoClient: true})

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('> MongoDb Connected')
});

// Set view engine
app.set('view engine','ejs')

// Static middleware

app.use(express.static('public'));

// App routes

app.get('/', (req, res) => {
    res.render('home', {title:'Welcome to Home page'})
})


// Auth routes

app.use('/auth', require('./routes/auth-routes'))

app.listen(3000, () => {
    console.log('> App running at port 3000')
})
