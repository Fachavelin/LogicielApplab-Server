const { Router } = require("express");
const { route } = require("express/lib/application");
const { obtenerDatosIndex } = require("../controllers/webpage");
/* const {
  obtenerDatosBody,
  obtenerDatosHero,
  obtenerImagenesHero,
  obtenerDatosFooter,
} = require('../controllers/webpage'); */

const router = new Router();

/* router.get('/datos-hero', obtenerDatosHero);

router.get('/imagenes-hero', obtenerImagenesHero);

router.get('/datos-body', obtenerDatosBody);

router.get('/datos-footer', obtenerDatosFooter);
 */

router.get("/datos-index", obtenerDatosIndex);

module.exports = router;
