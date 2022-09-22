const express = require("express");

const router = express.Router();
const usersController = require("../controllers/users-controller");

router.get("/", usersController.getUsers);
router.post("/", usersController.createUser);
router.put("/", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

module.exports = router;
