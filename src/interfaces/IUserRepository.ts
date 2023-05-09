type User = {
  id: number;
  name: string | null;
  email: string;
};

export interface IUserRepository {
  create(name: string, email: string): Promise<User>;
  listUsers(): Promise<User[] | null>
}
