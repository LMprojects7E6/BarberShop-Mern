//!IMPORT DEPENDENCIES
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users-controller");

//!CRUD
router.get("/", usersController.getUsers);
router.post("/", usersController.createUser);
router.put("/", usersController.updateUser);
router.delete("/", usersController.deleteUser);

module.exports = router;
