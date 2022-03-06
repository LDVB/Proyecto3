const router = require('express').Router()

//eventos

router.use("/eventos", require('./events.routes'))

//materiales

router.use("/material", require('./material.routes'))

module.exports = router;



// const User = require('../models/User.model')

// router.get('/getUserById/:_id', (req, res) => {

//     const { _id } = req.params
//     User
//         .findById(_id)
//         .then(response => res.json(response))
//         .catch(err => res.status(400).json(err))
// })


// router.get('/users', (req, res) => {
    

//     User
//         .find()
//         .then(data => res.json(data))
//         .catch(err => res.status(400).json(err))
// })

// module.exports = router