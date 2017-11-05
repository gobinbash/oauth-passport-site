const express = require('express')

const app = express()

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