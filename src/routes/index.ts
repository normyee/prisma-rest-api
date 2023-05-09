import { Router } from "express";
import { router as userRoutes } from "./users";
import { router as postRoutes } from "./posts";

const router = Router();

router.use(userRoutes);
router.use(postRoutes);

export { router };
