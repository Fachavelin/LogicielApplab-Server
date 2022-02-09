const { Schema, model } = require('mongoose');

const datosHeroSchema = Schema({
  titulo: {
    type: String,
    required: true,
  },
  cuerpo: {
    type: String,
    required: true,
  },
});

datosHeroSchema.methods.toJSON = function () {
  const { _id, ...data } = this.toObject();
  return data;
};

module.exports = model('DatosHero', datosHeroSchema);
