const router = require("express").Router();

const Event = require ("./../models/Event.model");
const User = require ("./../models/User.model");
const Comment = require ("./../models/Comment.model");

//creación Evento

router.post("/crear-evento", (req, res, next) => {
    res.json("esto es la creación de eventos ");
  });

//borrar Evento  

router.post("/borrar-evento", (req, res, next) => {
    res.json("esto es la eliminación de eventos ");
  });


// Listado de Eventos

router.get("/listado", (req, res, next) => {
    res.json("estos son los eventos ");
  });


// Detalles de eventos

router.get("/detalles/:id", (req, res, next) => {
    res.json("este es el detalle del evento");
  });




module.exports = router;
