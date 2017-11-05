const router = require('express').Router()

// Login page

router.get('/login', (req, res) => {

    res.render('login')

});

router.get('/google', (req, res) => {
    res.send('Google + login')
})

module.exports = router;