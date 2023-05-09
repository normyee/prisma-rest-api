import { IUserRepository } from "../../interfaces/IUserRepository";

class ListUsersService {
  constructor(private UserRepository: IUserRepository) {}
  async execute() {
    const users = await this.UserRepository.listUsers();

    return users;
  }
}

export { ListUsersService };
