import express from "express";

const router = express.Router();

//signIn page endpoints:

router.post("/signin", signIn);
router.post("/signup", signUp);
// router.post("/forgot", forgotPassword);
// router.post("/reset", resetPassword);

export default router;
