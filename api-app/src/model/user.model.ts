import { Column, Model, Table, IsEmail } from "sequelize-typescript";

@Table({
  tableName: "users_2",
})
export default class UserModel extends Model {
  @IsEmail
  @Column({ allowNull: false, unique: true })
  email: string;

  @Column({ allowNull: false })
  password: string;

  @Column
  verify_code: string;

  @Column
  verify_code_time: string;

  @Column
  name: string;

  @Column
  rule: string;
}
