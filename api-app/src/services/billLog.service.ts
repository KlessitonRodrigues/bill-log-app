import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Op, WhereOptions } from "sequelize";
import BillLogModel from "src/model/billLog.model";

@Injectable()
export class BillLogService {
  constructor(
    @InjectModel(BillLogModel)
    private billLogTable: typeof BillLogModel
  ) {}

  async getBillLogs(filters: {
    cpf: string;
    startDate: string;
    endDate: string;
    status: string;
  }) {
    const { cpf, endDate, startDate, status } = filters;

    const where: WhereOptions = {};
    if (status) where.status = status;
    if (cpf) where.cpf = { [Op.like]: `%${cpf}%` };
    if (startDate) where.date = { [Op.gte]: startDate };
    if (endDate) where.date = { [Op.lte]: endDate };
    if (startDate && endDate) {
      where.date = { [Op.between]: [startDate, endDate] };
    }

    const billLogs = await this.billLogTable.findAll({ where });
    if (!billLogs) throw new Error("bill logs not found");
    return billLogs;
  }

  async getBillLogById(id: string) {
    const billLog = await this.billLogTable.findOne({ where: { id } });
    if (!billLog) throw new Error("bill log not found");
    return billLog;
  }

  async createBillLog(billLog: any) {
    const newBillLog = await this.billLogTable.create(billLog);
    return newBillLog;
  }

  async createBillLogBatch(billLogs: any[]) {
    const newBillLogs = await this.billLogTable.bulkCreate(billLogs);
    return newBillLogs;
  }

  async updateBillLog(id: string, billLog: BillLogModel) {
    const billLogToUpdate = await this.billLogTable.findOne({ where: { id } });
    if (!billLogToUpdate) throw new Error("bill log not found");
    await billLogToUpdate.update(billLog);
    return billLogToUpdate;
  }
}
