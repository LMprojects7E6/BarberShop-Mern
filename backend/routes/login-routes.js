//!IMPORT DEPENDENCIES
const express = require("express");
const router = express.Router();
const { loginController } = require("../controllers/session-controller");
//!POST REGISTER ROUTE
router.post("/", loginController);

module.exports = router;
