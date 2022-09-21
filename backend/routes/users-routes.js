const express = require("express");

const router = express.Router();
const usersController = require("../controllers/users-controller");

router.get("/:id", usersController.getUsersById);
router.get("/:email", usersController.getUsersByEmail);
router.get("/:role", usersController.getUsersByRole);
router.post("/createUser", usersController.createUser);
router.patch("/updateUser/:id", usersController.updateUser);
router.delete("/deleteUser", usersController.deleteUser);

module.exports = router;
