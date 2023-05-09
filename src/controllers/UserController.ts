import { Request, Response } from "express";

import { CreateUserService } from "../services/User/CreateUserService";
import { UserRepository } from "../repositories/UserRepository";
import { ListUsersService } from "../services/User/ListUsersService";

export default {
  async newUser(req: Request, res: Response) {
    try {
      const { name, email } = req.body;

      const createUser = new CreateUserService(new UserRepository());

      const user = await createUser.execute(name, email);

      return res.status(201).json({ message: "New User Created!", user: user });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      } else {
        return res.status(400).json({ message: "Unknown error has occurred." });
      }
    }
  },

  async getAllUsers(req: Request, res: Response) {
    try {
      const listUsers = new ListUsersService(new UserRepository());

      const users = await listUsers.execute();

      return res.status(200).json({ message: "Users found!", users: users });
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      } else {
        return res.status(400).json({ message: "Unknown error has occurred." });
      }
    }
  },
};
