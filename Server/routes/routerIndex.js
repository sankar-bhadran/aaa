import { Router } from "express";
import UserRouter from "./userRouter.js";

const router = Router();

router.use("/api", UserRouter);

export default router;
