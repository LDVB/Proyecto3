const router = require("express").Router();

const Libro = require ("./../models/Libro.model");
const Podcast = require ("./../models/Podcast.model");
const Coworking = require ("./../models/Coworking.model");

//Listado

router.get("/listado", (req, res, next) => {
    res.json("esto es materiales ");
  });

//libros - listado

router.get("/libros", (req, res, next) => {
    res.json("esto son libros ");
  });


//libro - detalles

router.get("/libros/:id", (req, res, next) => {
    res.json("esto es el detalle del libro");
  });


// Coworking - listado

router.get("/coworking", (req, res, next) => {
    res.json("esto son los espacio de coworking ");
  });


//Coworking - detalles

router.get("/coworking/:id", (req, res, next) => {
    res.json("esto es el espacio de coworking");
  });


// Podcast - listado

router.get("/podcasts", (req, res, next) => {
    res.json("esto son los podcasts ");
  });


//Podcast - detalles

router.get("/podcasts/:id", (req, res, next) => {
    res.json("esto es el espacio de podcasts ");
  });



module.exports = router;
