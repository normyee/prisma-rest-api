import { IPostRepository } from "../../interfaces/IPostRepository";

class CreatePostService {
  constructor(private PostRepository: IPostRepository) {}

  async execute(title: string, content: string, authorId: number) {
    const post = await this.PostRepository.create(title, content, authorId);
    return post;
  }
}

export { CreatePostService };
