import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import BillLogModel from "src/model/billLog.model";

@Injectable()
export class BillLogService {
  constructor(
    @InjectModel(BillLogModel)
    private BillLogTable: typeof BillLogModel
  ) {}

  async getBillLogs() {
    const billLogs = await this.BillLogTable.findAll();
    if (!billLogs) throw new Error("bill logs not found");
    return billLogs;
  }

  async getBillLogById(id: string) {
    const billLog = await this.BillLogTable.findOne({ where: { id } });
    if (!billLog) throw new Error("bill log not found");
    return billLog;
  }

  async createBillLog(billLog: any) {
    const newBillLog = await this.BillLogTable.create(billLog);
    return newBillLog;
  }

  async createBillLogBatch(billLogs: any[]) {
    const newBillLogs = await this.BillLogTable.bulkCreate(billLogs);
    return newBillLogs;
  }

  async updateBillLog(id: string, billLog: BillLogModel) {
    const billLogToUpdate = await this.BillLogTable.findOne({ where: { id } });
    if (!billLogToUpdate) throw new Error("bill log not found");
    await billLogToUpdate.update(billLog);
    return billLogToUpdate;
  }
}
