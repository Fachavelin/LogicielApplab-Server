const {
  DatosHero,
  DatosBody,
  ImagenesHero,
  DatosFooter,
} = require('../models/index');

const obtenerImagenesHero = async (req, res) => {
  const imagenesHero = await ImagenesHero.find();

  return res.json(imagenesHero);
};

const obtenerDatosHero = async (req, res) => {
  const { titulo, cuerpo } = await DatosHero.findOne();

  return res.json({ titulo, cuerpo });
};

const obtenerDatosBody = async (req, res) => {
  const datosBody = await DatosBody.find();

  return res.json(datosBody);
};

const obtenerDatosFooter = async (req, res) => {
  const datosFooter = await DatosFooter.find();

  return res.json(datosFooter);
};

module.exports = {
  obtenerImagenesHero,
  obtenerDatosHero,
  obtenerDatosBody,
  obtenerDatosFooter,
};
