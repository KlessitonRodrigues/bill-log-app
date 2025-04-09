import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UserSchema } from "src/schemas/user.schema";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserSchema)
    private userModel: typeof UserSchema
  ) {}

  async findOne(id: string): Promise<any> {
    this.userModel.findOne({ where: { id } });
    return { test: "USER 1" };
  }

  async findAll(): Promise<any> {
    const users = await this.userModel.findAll();
    return users;
  }

  async create(user: any): Promise<any> {
    const newUser = await this.userModel.create(user);
    return newUser;
  }

  async update(id: string, user: any): Promise<any> {
    const updatedUser = await this.userModel.update(user, {
      where: { id },
    });
    return updatedUser;
  }

  async delete(id: string): Promise<any> {
    const deletedUser = await this.userModel.destroy({
      where: { id },
    });
    return deletedUser;
  }
}
