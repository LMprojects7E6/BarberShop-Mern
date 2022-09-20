import express from "express";

const router = express.Router();
const usersController = require("../controllers/users-controller");

//signIn page endpoints:

router.post("/signIn", usersController.signIn);
router.post("/signup", usersController.signUp);
router.post("/forgot", forgotPassword);
router.post("/reset", resetPassword);

export default router;
