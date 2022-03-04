const router = require("express").Router();
const { isAuthenticated } = require('../middlewares/jwt.middleware')
const Event = require("../models/Event.model");
const User = require("../models/User.model");
const Comment = require("../models/Comment.model");

//creación Evento 

router.post("/crear-evento", isAuthenticated, (req, res, next) => {

  //res.json("esto es la creación de eventos ")

  const event = { ...req.body, owner: req.payload._id }

  console.log('DEBERIA TENER LA LOCALIZACION', event)

  Event
    .create(event)
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
});


//modificar Evento

router.put("/modificar-evento/:id", isAuthenticated, (req, res, next) => {

  const { id } = req.params

  Event
    .findByIdAndUpdate(id, req.body)
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
});

//borrar Evento  

router.delete("/borrar-evento/:id", (req, res, next) => {

  //res.json("esto es la eliminación de eventos ");
  const { id } = req.params

  Event
    .findByIdAndDelete(id)
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))

});


// Listado de Eventos

router.get("/listado", (req, res, next) => {

  //  res.json("estos son los eventos ");

  Event
    .find()
    .select('name date image')
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
});


// Detalles de eventos

router.get("/detalles/:id", (req, res, next) => {

  //res.json("este es el detalle del evento");

  const { id } = req.params

  Event
    .findById(id)
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
});




module.exports = router;
