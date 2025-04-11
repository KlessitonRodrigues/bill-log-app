import { Column, IsDate, IsNumeric, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "bill_logs",
})
export default class BillLogModel extends Model {
  @Column({ allowNull: false, unique: true })
  cpf: string;

  @Column({ allowNull: false })
  description: string;

  @IsDate
  @Column({ allowNull: false })
  date: string;

  @IsNumeric
  @Column({ allowNull: false })
  amount: string;

  @IsNumeric
  @Column({ allowNull: false })
  pointsAmount: string;

  @Column({ allowNull: false })
  status: string;
}
