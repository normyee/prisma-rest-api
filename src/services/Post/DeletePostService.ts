import { IPostRepository } from "../../interfaces/IPostRepository";

class DeletePostService {
  constructor(private PostRepository: IPostRepository) {}

  async execute(id: number) {
    const post = await this.PostRepository.delete(id);
    return post;
  }
}

export { DeletePostService };
