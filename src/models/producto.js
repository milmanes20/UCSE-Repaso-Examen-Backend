// File: src/models/producto.js

const mongoose = require('mongoose')


const productoSchema = new mongoose.Schema({

  codigo: {

    type: Number,

    required: true

  },

  nombre: {

    type: String,

    required: true

  },

  precio: {

    type: Number,

    required: true

  },

  categorias: {

    type: [String],

    required: false,
    default: []

  }

})


const producto = mongoose.model('electronicos', productoSchema)


module.exports = { producto }
