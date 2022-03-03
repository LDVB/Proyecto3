const router = require('express').Router()

//eventos

router.use("/eventos", require('./events.routes'))

//materiales

router.use("/material", require('./material.routes'))




module.exports = router;
