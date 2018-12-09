var mongoose = require('mongoose')

var BookSchema = new mongoose.Schema({
  title: mongoose.SchemaTypes.String,
  author: mongoose.SchemaTypes.String,
  genre: mongoose.SchemaTypes.String,
  words: mongoose.SchemaTypes.String,
  description: mongoose.SchemaTypes.String,
  rating: mongoose.SchemaTypes.String,

  educational: {
    type: mongoose.SchemaTypes.Boolean,
    default: false
  },
  extraterrestrials: { type: mongoose.SchemaTypes.Boolean, default: false },
  timeTravel: { type: mongoose.SchemaTypes.Boolean, default: false },
  philosophical: {
    type: mongoose.SchemaTypes.Boolean,
    default: false
  },
  happyEnd: { type: mongoose.SchemaTypes.Boolean, default: false }
})

module.exports = mongoose.model('Book', BookSchema)
