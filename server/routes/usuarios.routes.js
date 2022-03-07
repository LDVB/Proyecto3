const User = require('../models/User.model')

const router = require('express').Router()

router.get('/getUserById/:id', (req, res) => {

    const { id } = req.params
    User
        .findById(id)
        .then(data => res.json(data))
})



module.exports = router