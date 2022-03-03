const router = require("express").Router();

//homePage
router.get("/", (req, res, next) => {
  // res.json("All good in here");
});

//AuthPage
router.use("/auth", require('./auth.routes'))

//UserPage
router.use("/usuario", require('./user.routes'))

//Upload
router.use("/upload", require('./upload.routes'))


module.exports = router;
