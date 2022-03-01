const express = require("express");
const bcrypt = require ("bcrypt");
const jwt  = require ("jsonwebtoken")
const User = require ("./../models/User.model");
const {}


const router = require("express").Router();

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
