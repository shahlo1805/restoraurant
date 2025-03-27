import { Router } from "express";
import categoryRouter from "./category.route.js";
import foodRouter from "./product.route.js";


const router = Router();

router.use("/categories", categoryRouter)
.use("/foods", foodRouter);

export default router;