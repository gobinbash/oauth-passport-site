const router = require('express').Router()

// Login page

router.get('/login', (req, res) => {

    res.send('Login page')

});

router.get('/google', (req, res) => {
    res.send('Google + login')
})

module.exports = router;