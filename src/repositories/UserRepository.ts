import { prisma } from "../config/database";
import { IUserRepository } from "../interfaces/IUserRepository";

type User = {
  id: number;
  name: string | null;
  email: string;
};

class UserRepository implements IUserRepository {
  async create(name: string, email: string): Promise<User> {
    if (await prisma.user.findUnique({ where: { email } })) {
      throw new Error("This User already exists!");
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return user;
  }

  async listUsers(): Promise<User[] | null> {
    const users = await prisma.user.findMany();

    if (!users) {
      throw new Error("No users in this application!");
    }

    return users;
  }
}

export { UserRepository };
