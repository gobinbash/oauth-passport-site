const express = require('express')
const PassportConfig = require('./config/passport')

const cookieSession = require('cookie-session')
const passport = require('passport')
const AuthMiddlewares = require('./middlewares/auth-middlewares')

const app = express()

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

app.use('/auth',AuthMiddlewares.Guest, require('./routes/auth-routes'))


// User routes 

app.use('/profile',AuthMiddlewares.AuthGaurd,require('./routes/user-routes'))

module.exports = app;

