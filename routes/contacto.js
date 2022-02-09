const { Router } = require('express');
const { check } = require('express-validator');
const enviarEmail = require('../controllers/contacto');
const { validarChecks } = require('../middlewares/validarChecks');

const router = new Router();

router.post(
  '/',
  [
    check('email', 'El nombre es obligatorio').notEmpty(),
    check('email', 'El nombre es obligatorio').isEmail(),
    check('telefono', 'El telefono es obligatorio').notEmpty(),
    check('asunto', 'El asunto es necesario').notEmpty(),
    validarChecks,
  ],
  enviarEmail
);

module.exports = router;
