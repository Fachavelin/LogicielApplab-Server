const { Schema, model } = require('mongoose');

const datosBodySchema = Schema({
  titulo: {
    type: String,
    required: true,
  },
  cuerpo: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
  },
});

datosBodySchema.methods.toJSON = function () {
  const { _id, ...data } = this.toObject();
  return data;
};

module.exports = model('DatosBody', datosBodySchema);
