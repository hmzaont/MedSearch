const mongoose = require('mongoose');

const ilacSchema = new mongoose.Schema({
  ilacadi: String,
  atckodu: String,
  atcadi: String,
  firmaadi: String,
  aciklamaen: String,
  aciklamaentotr: String,
  sideeffects: String,
  sideeffectsTR: String,
  medicalusestr: String,
  aciklamatr : String,
});

const Ilac = mongoose.model('Ilac', ilacSchema);

module.exports = Ilac;
