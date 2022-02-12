const { Schema, model } = require('mongoose');

const datosFooterSchema = Schema({
  nombre: {
    type: String,
    required: true,
  },
  enlace: {
    type: String,
    required: true,
  },
  icono: {
    type: String,
    required: true,
  },
});

datosFooterSchema.methods.toJSON = function () {
  const { _id, ...data } = this.toObject();
  return data;
};

module.exports = model('DatosFooter', datosFooterSchema);
