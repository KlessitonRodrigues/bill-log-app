import { Column, Model, Table } from "sequelize-typescript";

@Table
export class UserSchema extends Model {
  @Column
  name: string;

  @Column
  email: string;
}
