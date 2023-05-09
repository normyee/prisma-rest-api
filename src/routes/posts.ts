import { Router } from "express";
import PostController from "../controllers/PostController";

const router = Router();

router.post("/newPost", PostController.newPost);
router.get("/getPost/:id", PostController.listPost);
router.patch("/updatePost/:id", PostController.editPost);
router.delete("/deletePost/:id", PostController.deletePost);

export { router };
