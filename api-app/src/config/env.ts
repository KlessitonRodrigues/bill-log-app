import { config } from "dotenv";

config();

export const env = {
  API_PORT: Number(process.env.API_PORT),
  DB_HOST: process.env.DB_HOST,
  DB_PORT: Number(process.env.DB_PORT),
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  TOKEN_KEY: process.env.TOKEN_KEY,
};
