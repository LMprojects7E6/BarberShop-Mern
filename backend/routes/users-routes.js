const express = require("express");

const router = express.Router();
const usersController = require("../controllers/users-controller");

//signIn page endpoints:

router.post("/signIn", usersController.signIn);
router.post("/signup", usersController.signUp);
// router.post("/forgot", forgotPassword);
// router.post("/reset", resetPassword);

module.exports = router;
