import { Column, Model, Table, IsEmail } from "sequelize-typescript";

@Table({
  tableName: "users_3",
})
export default class UserModel extends Model {
  @IsEmail
  @Column({ allowNull: false, unique: true })
  email: string;

  @Column({ allowNull: false })
  password: string;

  @Column
  verifyCode: string;

  @Column
  verifyCodeTime: string;

  @Column
  name: string;

  @Column
  rule: string;
}
