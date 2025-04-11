import { Controller, Get, Headers, HttpStatus, Res } from "@nestjs/common";
import { Response } from "express";
import { AuthService } from "src/services/auth.service";
import { UserService } from "src/services/user.service";

@Controller("/user")
export class UserController {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  @Get("/me")
  async getUserData(@Headers() header, @Res() res: Response) {
    try {
      const user = await this.authService.decodeToken(header.authorization);
      const userData = await this.userService.getUser(user.id);
      return res.status(200).json(userData);
    } catch (err: any) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: err.message });
      return;
    }
  }
}
