import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { sequelizeConfig } from "src/config/sequelize.config";
import { AuthService } from "./services/auth.service";
import { UserService } from "./services/user.service";
import { AuthController } from "./controllers/auth.controller";
import UserModel from "./model/user.model";

@Module({
  imports: [
    SequelizeModule.forRoot(sequelizeConfig),
    SequelizeModule.forFeature([UserModel]),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService],
})
export class AppModule {}
