import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from "src/services/user.service";

@Controller("/auth")
export class AuthController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers(@Body() body) {
    return this.userService.findAll();
  }

  @Get(":id")
  async getUserById(@Param() params) {
    const { id } = params;
    return this.userService.findOne(id);
  }

  @Post()
  async createUser(@Body() body) {
    return this.userService.create(body);
  }
}
