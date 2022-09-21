const express = require("express");

const router = express.Router();
const usersController = require("../controllers/users-controller");

router.get("/" , usersController.test);
router.get("/:email", usersController.getUsersByEmail);
router.post("/", usersController.createUser);
router.patch("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

module.exports = router;
