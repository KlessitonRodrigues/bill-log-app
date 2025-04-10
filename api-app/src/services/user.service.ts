import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import UserModel from "src/model/user.model";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel)
    private UserTable: typeof UserModel
  ) {}

  async getUser(userId: string) {
    const user = await this.UserTable.findOne({
      attributes: { exclude: ["password"] },
      where: { id: userId },
    });
    if (!user) throw new Error("user not found");
    return user;
  }
}
