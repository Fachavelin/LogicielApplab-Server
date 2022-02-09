const { Schema, model } = require('mongoose');

const imagenesHeroSchema = Schema({
  imagen: {
    type: String,
    required: true,
  },
});

imagenesHeroSchema.methods.toJSON = function () {
  const { _id, ...data } = this.toObject();
  return data;
};

module.exports = model('ImagenesHero', imagenesHeroSchema);
