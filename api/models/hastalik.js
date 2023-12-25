const mongoose = require('mongoose');

const HastalikSchema = new mongoose.Schema({
  hastalikadi: String,
  ilaceslesti: [String],
});

const Hastalik = mongoose.model('Hastalik', HastalikSchema);

module.exports = Hastalik;
