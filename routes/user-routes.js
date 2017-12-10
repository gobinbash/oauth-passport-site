const router = require('express').Router()

router.get('/', (req, res) => {
    res.send(`profile page of ${req.user.first_name}`)
})


module.exports = router