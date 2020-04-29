const mongoose = require("mongoose"); // same instance of mongoose

//product schema design
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//passing the productSchema instance to mongoose.model
const Product = mongoose.model("Product", productSchema);

//exporting the schema to be used further
module.exports = Product;
