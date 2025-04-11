import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { sequelizeConfig } from "src/config/sequelize.config";
import { AuthService } from "./services/auth.service";
import { UserService } from "./services/user.service";
import { AuthController } from "./controllers/auth.controller";
import UserModel from "./model/user.model";
import BillLogModel from "./model/billLog.model";
import { BillLogController } from "./controllers/billLog.controller";
import { BillLogService } from "./services/billLog.service";
import { UserController } from "./controllers/user.controller";

@Module({
  imports: [
    SequelizeModule.forRoot(sequelizeConfig),
    SequelizeModule.forFeature([UserModel]),
    SequelizeModule.forFeature([BillLogModel]),
  ],
  controllers: [AuthController, BillLogController, UserController],
  providers: [AuthService, UserService, BillLogService],
})
export class AppModule {}
