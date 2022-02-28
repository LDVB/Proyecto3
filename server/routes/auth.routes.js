const router = require("express").Router();

const User = require ("./../models/User.model");

//registro

router.post("/registro", (req, res, next) => {
    res.json("esto es el registro ");
  });

// inicio sesión

router.post("/inicio-sesion", (req, res, next) => {
    res.json("esto es el inicio ");
  });


// cerrar sesión

router.get("/cerrar-sesion", (req, res, next) => {
    res.json("esto es el cierre ");
  });


module.exports = router;
