import { IPostRepository } from "../../interfaces/IPostRepository";

class UpdatePostService {
  constructor(private PostRepository: IPostRepository) {}

  async execute(id: number, title: string, content: string) {
    const post = await this.PostRepository.update(id, title, content);

    return post;
  }
}

export { UpdatePostService };
