const express = require("express"); //fetch the existing instance
const router = express.Router();

console.log("router loaded");

//for any other routes, access from here
router.use("/products", require("./products"));

//exporting the router
module.exports = router;
