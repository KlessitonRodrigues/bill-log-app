import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { AuthController } from "src/controllers/auth.controller";
import { UserSchema } from "src/schemas/user.schema";
import { UserService } from "src/services/user.service";

@Module({
  imports: [SequelizeModule.forFeature([UserSchema])],
  providers: [UserService],
  controllers: [AuthController],
})
export class AuthModule {}
