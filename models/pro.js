const mongoose = require("mongoose");
// const { type } = require("os");
const productSchema = new mongoose.Schema({
  name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      rating: {
        type: Number,
        required: true, // Make sure rating is required
        min: 0,
        max: 5,
      },
});

module.exports = mongoose.model('Product', productSchema)

// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   rating: {
//     type: Number,
//     required: true, // Make sure rating is required
//     min: 0,
//     max: 5,
//   },
// });

// const Product = mongoose.model('Product', productSchema);

// module.exports = Product;
