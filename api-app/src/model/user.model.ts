import { Column, Model, Table, IsEmail } from "sequelize-typescript";

@Table({
  tableName: "users",
})
export default class UserModel extends Model {
  @Column({ allowNull: false, unique: true })
  cpf: string;

  @IsEmail
  @Column({ allowNull: false, unique: true })
  email: string;

  @Column({ allowNull: false })
  password: string;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  rule: string;

  @Column
  verifyCode: string;

  @Column
  verifyCodeTime: string;
}
