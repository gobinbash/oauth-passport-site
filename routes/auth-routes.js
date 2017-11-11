const router = require('express').Router()
const passport = require('passport')
// Login page

router.get('/login', (req, res) => {

    res.render('login')

});

router.get('/google', passport.authenticate('google', { scope: ['profile']}))

// Google auth redirect

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {

    res.send('Success')
})

module.exports = router;