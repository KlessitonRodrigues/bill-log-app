import { Column, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "bill_logs",
})
export default class BillLogModel extends Model {
  @Column({ allowNull: false })
  cpf: string;

  @Column({ allowNull: false })
  description: string;

  @Column({ allowNull: false })
  date: string;

  @Column({ allowNull: false })
  amount: string;

  @Column({ allowNull: false })
  pointsAmount: string;

  @Column({ allowNull: false })
  status: string;
}
