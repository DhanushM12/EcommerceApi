const express = require("express"); //fetch the existing instance
const router = express.Router();

const productsApi = require("../controllers/products_controller");

//to get all the products in db
router.get("/", productsApi.home);

// to add products in db
router.post("/create", productsApi.create);

//to remove products from db
router.post("/:id", productsApi.destroy);

//to update the quantity of products in db
router.post("/:id/update_quantity/", productsApi.update);

//exporting the router
module.exports = router;
