const { Router } = require('express');
const { route } = require('express/lib/application');
const {
  obtenerDatosBody,
  obtenerDatosHero,
  obtenerImagenesHero,
  obtenerDatosFooter,
} = require('../controllers/webpage');

const router = new Router();

router.get('/datos-hero', obtenerDatosHero);

router.get('/imagenes-hero', obtenerImagenesHero);

router.get('/datos-body', obtenerDatosBody);

router.get('/datos-footer', obtenerDatosFooter);

module.exports = router;
