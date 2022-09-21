const express = require("express");

const router = express.Router();
const usersController = require("../controllers/users-controller");

router.get("/", usersController.getUsersById);
// router.get("/email", usersController.getUsersByEmail);
// router.get("/role", usersController.getUsersByRole);
router.post("/createUser", usersController.createUser);
router.patch("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

module.exports = router;
