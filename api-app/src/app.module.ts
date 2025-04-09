import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { sequelizeConfig } from "src/config/sequelize.config";
import { AuthModule } from "./modules/auth.module";

@Module({
  imports: [SequelizeModule.forRoot(sequelizeConfig), AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
