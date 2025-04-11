import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import UserModel from "src/model/user.model";
import { hoursToMs } from "src/utils/time";
import { env } from "src/config/env";

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserModel)
    private UserTable: typeof UserModel
  ) {}

  async signIn(email: string, password: string, expiresIn: number) {
    if (!(email || password)) throw new Error("invalid credentials");
    const user = await this.UserTable.findOne({ where: { email } });
    if (!user) throw new Error("invalid credentials");
    const isValidPassord = bcrypt.compareSync(password, user.password);
    if (!isValidPassord) throw new Error("invalid credentials");
    return jwt.sign({ id: user.id }, env.TOKEN_KEY, { expiresIn });
  }

  async signUp(user: UserModel) {
    const { email, password } = user;
    if (!(email || password)) throw new Error("invalid credentials");
    const userExists = await this.UserTable.findOne({ where: { email } });
    if (userExists) throw new Error("user already exists");
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await new UserModel({
      ...user,
      email,
      password: hashedPassword,
    }).save();

    newUser.password = undefined;
    return newUser;
  }

  async decodeToken(token: string) {
    const decodedToken = jwt.verify(token, env.TOKEN_KEY) as any;
    if (!decodedToken?.id) throw new Error("Invalid token id");
    return decodedToken;
  }

  async refreshToken(token: string) {
    const decodedToekn = jwt.verify(token, env.TOKEN_KEY) as any;
    const { id, exp } = decodedToekn;
    if (!id) throw new Error("Invalid token");
    const newToken = jwt.sign({ id }, env.TOKEN_KEY, { expiresIn: exp });
    return { userId: id, token: newToken };
  }

  async requestCode(email: string) {
    const user = await this.UserTable.findOne({ where: { email } });
    if (!user) throw new Error("user not found");
    const code = Math.random().toString().substring(2, 6);
    user.verify_code = code;
    user.verify_code_time = String(Date.now() + hoursToMs(1));
    await user.save();
    return code;
  }

  async verifyCode(email: string, userCode: string) {
    const user = await this.UserTable.findOne({ where: { email } });
    if (!user) throw new Error("user not found");
    if (!user.verify_code) throw new Error("Code not requested");
    if (user.verify_code !== userCode)
      throw new Error("Invalid verification code");
    if (Number(user.verify_code_time) < Date.now())
      throw new Error("Code was expired");

    const newToken = jwt.sign({ id: user.id }, env.TOKEN_KEY, {
      expiresIn: hoursToMs(12),
    });

    return { email: user.email, token: newToken };
  }
}
