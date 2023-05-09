import { IPostRepository } from "../interfaces/IPostRepository";
import { prisma } from "../config/database";

type Post = {
  id: number;
  title: string | null;
  content: string;
  authorId: number;
};

class PostRepository implements IPostRepository {
  async create(
    title: string,
    content: string,
    authorId: number
  ): Promise<Post> {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId,
      },
    });
    return post;
  }

  async listPost(id: number): Promise<Post | null> {
    const post = await prisma.post.findUnique({ where: { id } });

    if (!post) {
      throw new Error("This User's post doesn't exist!");
    }

    return post;
  }

  async update(id: number, title: string, content: string): Promise<Post> {
    const postExists = await prisma.post.findUnique({ where: { id } });

    if (!postExists) {
      throw new Error("This User's post doesn't exist!");
    }

    const post = await prisma.post.update({
      where: { id },
      data: {
        title,
        content,
      },
    });

    return post;
  }

  async delete(id: number): Promise<Post> {
    const postExists = await prisma.post.findUnique({
      where: { id },
    });

    if (!postExists) {
      throw new Error("This User's post doesn't exist!");
    }

    const post = await prisma.post.delete({
      where: { id },
    });

    return post;
  }
}

export { PostRepository };
