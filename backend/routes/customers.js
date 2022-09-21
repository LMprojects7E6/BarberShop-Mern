import express from "express";

const router = express.Router();

router.get("/costumers", getCostumers);
router.get("/costumers/:id", getCostumersById);
router.delete("/costumers/:id", deleteCostumer);

export default router;
