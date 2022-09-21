//!IMPORT DEPENDENCIES
const express = require("express");
const router = express.Router();
const { registerController } = require("../controllers/session-controller");
//!POST REGISTER ROUTE
router.post("/", registerController);

module.exports = router;
