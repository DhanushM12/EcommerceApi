const Product = require("../models/products");

//to fetch all the data of products
module.exports.home = async function (req, res) {
  let products = await Product.find({}).sort("-createdBy");

  return res.json(200, {
    products: products,
  });
};

//to add products to db
module.exports.create = async function (req, res) {
  try {
    let product = await Product.create({
      name: req.body.name,
      quantity: req.body.quantity,
    });

    return res.status(200).json({
      data: {
        product: product,
      },
      message: "Product added",
    });
  } catch (err) {
    console.log("Error ", err);
    return res.redirect("back");
  }
};

//to delete the product from db by using product id
module.exports.destroy = async function (req, res) {
  try {
    let product = await Product.findById(req.params.id); // getting the id of user
    product.remove(); // deleting th product from db

    return res.status(200).json({
      message: "product deleted",
    });
  } catch (err) {
    console.log("Error ", err);
    return res.redirect("back");
  }
};

//to increment or decrement the quantity of product
module.exports.update = function (req, res) {
  try {
    Product.findByIdAndUpdate({ _id: req.params.id }),
      { $set: { quantity: quantity + eval(req.params.number) } }, // using eval to convert string to number
      function (err, product) {
        if (err) {
          console.log("product not found in db");
        }
        return res.json(200, {
          data: {
            product: product,
          },
          message: "updated successfully",
        });
      };
  } catch (err) {
    console.log("Error ", err);
    return res.redirect("back");
  }
};
