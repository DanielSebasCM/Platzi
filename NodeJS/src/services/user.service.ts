import { faker } from "@faker-js/faker";
import { HttpException } from "../exceptions/HttpException";

import zod from "zod";

const userSchema = zod.object({
  id: zod.number().optional(),
  name: zod.string(),
  email: zod.string(),
  points: zod.number(),
});

type User = zod.infer<typeof userSchema>;

class UserService {
  private static instance: UserService;

  private users: User[] = Array.from({ length: 50 }, (_, i) => {
    return {
      id: i + 1,
      name: faker.name.fullName(),
      email: faker.internet.email(),
      points: faker.datatype.number({ min: 0, max: 100 }),
    } as User;
  });

  static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }

    return UserService.instance;
  }

  async getUsers(): Promise<User[]> {
    return this.users;
  }

  async getUser(id: number): Promise<User | undefined> {
    const userFound = this.users.find((u) => u.id === id);
    if (!userFound) throw new HttpException(404, "User not found");
    return userFound;
  }

  async createUser(user: User): Promise<User> {
    const newUser = userSchema.parse(user);
    newUser.id = this.users.length + 1;
    this.users.push(newUser);
    return newUser;
  }

  async updateUser(id: number, user: any): Promise<User> {
    const userFound = this.users.find((u: User) => u.id === id);
    if (!userFound) {
      throw new HttpException(404, "User not found");
    }

    userFound.name = user.name ? user.name : userFound.name;
    userFound.email = user.email ? user.email : userFound.email;
    userFound.points = user.points ? user.points : userFound.points;

    return userFound;
  }

  async deleteUser(id: number): Promise<void> {
    const userFound = this.users.find((u: User) => u.id === id);
    if (!userFound) {
      throw new HttpException(404, "User not found");
    }

    const index = this.users.indexOf(userFound);
    this.users.splice(index, 1);
  }
}

export default UserService;
