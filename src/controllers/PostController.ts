import { Request, Response } from "express";

import { CreatePostService } from "../services/Post/CreatePostService";
import { PostRepository } from "../repositories/PostRepository";
import { ListPostService } from "../services/Post/ListPostService";
import { UpdatePostService } from "../services/Post/UpdatePostService";
import { DeletePostService } from "../services/Post/DeletePostService";

export default {
  async newPost(req: Request, res: Response) {
    try {
      const { title, content, authorId } = req.body;

      const createPost = new CreatePostService(new PostRepository());

      const post = await createPost.execute(title, content, authorId);

      return res.status(201).json({ message: "New User Post!", post: post });
    } catch (error) {
      return res.status(400).json({ message: "Error has occurred!" });
    }
  },

  async listPost(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const listPost = new ListPostService(new PostRepository());

      const post = await listPost.execute(Number(id));

      return res.status(200).json({ message: "Post found!", post: post });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      } else {
        return res.status(400).json({ message: "Unknown error has occurred." });
      }
    }
  },

  async editPost(req: Request, res: Response) {
    try {
      const { title, content } = req.body;
      const { id } = req.params;

      const updatePost = new UpdatePostService(new PostRepository());

      const post = await updatePost.execute(Number(id), title, content);

      return res.status(200).json({ message: "Post edited!", post: post });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      } else {
        return res.status(400).json({ message: "Unknown error has occurred." });
      }
    }
  },

  async deletePost(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const deletePost = new DeletePostService(new PostRepository());

      const post = await deletePost.execute(Number(id));

      return res
        .status(200)
        .json({ message: "Post deleted!", deletedPost: post });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      } else {
        return res.status(400).json({ message: "Unknown error has occurred." });
      }
    }
  },
};
