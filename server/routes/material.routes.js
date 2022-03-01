const router = require("express").Router();
const Material = require("../models/Material.model");

//Listado

router.get("/listado", (req, res, next) => {
  // res.json("esto es materiales ");

  Material
    .find()
    .select('name imageUrl website')
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
});

//libros - listado

router.get("/libros", (req, res, next) => {
  //res.json("esto son libros ");
});


//libro - detalles

router.get("/libros/:id", (req, res, next) => {
  // res.json("esto es el detalle del libro");

  const { material_id } = req.params

  Material
    .findById(material_id)
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
});


// Coworking - listado

router.get("/coworking", (req, res, next) => {
  // res.json("esto son los espacio de coworking ");
  Material
    .find()
    .select('name imageUrl buy')
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
});


//Coworking - detalles

router.get("/coworking/:id", (req, res, next) => {
  // res.json("esto es el espacio de coworking");
  const { material_id } = req.params

  Material
    .findById(material_id)
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
});




module.exports = router;
