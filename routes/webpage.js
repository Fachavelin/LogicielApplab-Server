const { Router } = require('express');
const { route } = require('express/lib/application');
const {
  obtenerDatosBody,
  obtenerDatosHero,
  obtenerImagenesHero,
} = require('../controllers/webpage');

const router = new Router();

router.get('/datos-hero', obtenerDatosHero);

router.get('/imagenes-hero', obtenerImagenesHero);

router.get('/datos-body', obtenerDatosBody);

route.get('/datos-body');

module.exports = router;
