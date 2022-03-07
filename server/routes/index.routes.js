const router = require("express").Router();

//homePage

router.get("/", (req, res, next) => {

});

//AuthPage

router.use("/auth", require('./auth.routes'))

//UserPage

router.use("/usuario", require('./user.routes'))

//Upload

router.use("/upload", require('./upload.routes'))

//Users

router.use("/user", require('./usuarios.routes'))


module.exports = router;
