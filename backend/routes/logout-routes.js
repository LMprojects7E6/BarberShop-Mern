//!IMPORT DEPENDENCIES
const express = require("express");
const router = express.Router();
//!POST REGISTER ROUTE
router.get("/", (req, res, next) => {
  //Delete coockies empty
  //Add exp to coockies the minimum
  res.cookie("access-token", "", { maxAge: 1 });
  res.status(200).send("LOGOUT SUCCESFULLY");
});

module.exports = router;
