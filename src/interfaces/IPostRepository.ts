type Post = {
  id: number;
  title: string | null;
  content: string;
  authorId: number;
};

export interface IPostRepository {
  create(title: string, content: string, authorId: number): Promise<Post>;
  listPost(id: number): Promise<Post | null>;
  update(id: number, title: string, content: string): Promise<Post>;
  delete(id: number): Promise<Post>;
}
