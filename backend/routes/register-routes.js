//!IMPORT DEPENDENCIES
const express = require("express");
const router = express.Router();
const { register } = require("../controllers/users-controller");
//!POST REGISTER ROUTE
router.post("/", register);

module.exports = router;
