const router = require("express").Router();
const { isAuthenticated, isLoggedIn } = require('../middlewares/jwt.middleware')
const Event = require("../models/Event.model");
const User = require("../models/User.model");
const Comment = require("../models/Comment.model");

//creación Evento 

router.post("/crear-evento", isAuthenticated, (req, res, next) => {

  const event = { ...req.body, owner: req.payload._id }
  console.log(req.payload)

  Event
    .create(event)
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
});


//modificar Evento

router.put("/modificar-evento/:id", isAuthenticated, (req, res, next) => {

  const { id } = req.params
  console.log(req.payload)

  if (req.payload._id !== id) {

    res.json({ ErrorMessage: "No estás atuorizado a modificar el evento" })

  } else {
    Event
      .findByIdAndUpdate(id, req.body)
      .then(response => res.json(response))
      .catch(err => res.status(500).json(err))
  }
});

//borrar Evento  

router.delete("/borrar-evento/:id", isAuthenticated, (req, res, next) => {

  const { id } = req.params
  console.log(req.payload)

  if (req.payload._id !== id) {

    res.json({ ErrorMessage: "No estás atuorizado a modificar el evento" })

  } else {
    Event
      .findByIdAndDelete(id)
      .then(response => res.json(response))
      .catch(err => res.status(500).json(err))
  }
});

// Listado de Eventos

router.get("/listado", (req, res, next) => {

  Event
    .find()
    .select('name date image')
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
});

// Detalles de eventos

router.get("/detalles/:id", (req, res, next) => {

  const { id } = req.params

  Event
    .findById(id)
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
});

// Asistir a un evento

router.put('/detalles/:event_id/asistir', isAuthenticated, (req, res) => {

  const { event_id } = req.params
  const { _id } = req.payload

  Event
    .findByIdAndUpdate(event_id, { $push: { assistants: _id } })
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})

// Desapuntarse de un evento

router.put('/detalles/:event_id/desapuntarse', isAuthenticated, (req, res) => {

  const { event_id } = req.params
  const { _id } = req.payload

  Event
    .findByIdAndUpdate(event_id, { $pull: { assistants: _id } })
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})

// Mis eventos
// router.get('/mis-eventos', isAuthenticated, (req, res, next) => {

//   const { _id } = req.payload

//   Event
//     .findOne({ owner: _id })
//     .then(filteredEvents => res.json(filteredEvents))
//     .catch(err => console.log(err))
// })

module.exports = router;

