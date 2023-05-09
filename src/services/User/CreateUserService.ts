import { IUserRepository } from "../../interfaces/IUserRepository";

class CreateUserService {
  constructor(private UserRepository: IUserRepository) {}
  async execute(name: string, email: string) {
    const user = await this.UserRepository.create(name, email);

    return user;
  }
}

export { CreateUserService };
