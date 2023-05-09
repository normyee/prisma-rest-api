import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();

router.post("/newUser", UserController.newUser);
router.get("/getAllUsers", UserController.getAllUsers);

export { router };
