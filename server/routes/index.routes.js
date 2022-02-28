const router = require("express").Router();

//homePage
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

//AuthPage
router.use("/auth", require('./auth.routes'))

//UserPage
router.use("/usuario", require('./usuario.routes'))



module.exports = router;
