import { SequelizeModuleOptions } from "@nestjs/sequelize";
import { env } from "./env";

export const sequelizeConfig: SequelizeModuleOptions = {
  dialect: "mysql",
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  autoLoadModels: true,
  synchronize: true,
};
