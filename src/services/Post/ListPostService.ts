import { IPostRepository } from "../../interfaces/IPostRepository";

class ListPostService {
  constructor(private PostRepository: IPostRepository) {}

  async execute(id: number) {
    const post = this.PostRepository.listPost(id);

    return post;
  }
}

export { ListPostService };
