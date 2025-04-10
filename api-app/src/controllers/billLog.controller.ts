import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from "@nestjs/common";
import { Response } from "express";
import { BillLogService } from "src/services/billLog.service";

@Controller("/bill-logs")
export class BillLogController {
  constructor(private billLogService: BillLogService) {}

  @Get()
  async getBillLogs(@Res() res: Response) {
    try {
      const billLogs = await this.billLogService.getBillLogs();
      return res.status(200).json(billLogs);
    } catch (err: any) {
      res.status(HttpStatus.BAD_REQUEST).json({ error: err.message });
      return;
    }
  }

  @Get(":id")
  async getBillLogById(@Param() params, @Res() res: Response) {
    try {
      const { id } = params;
      const billLog = await this.billLogService.getBillLogById(id);
      return res.status(200).json(billLog);
    } catch (err: any) {
      res.status(HttpStatus.BAD_REQUEST).json({ error: err.message });
      return;
    }
  }

  @Post()
  async createBillLog(@Body() body, @Res() res: Response) {
    try {
      const billLog = await this.billLogService.createBillLog(body);
      return res.status(201).json(billLog);
    } catch (err: any) {
      res.status(HttpStatus.BAD_REQUEST).json({ error: err.message });
      return;
    }
  }

  @Post("/batch")
  async createBillLogBatch(@Body() body, @Res() res: Response) {
    try {
      const billLogs = await this.billLogService.createBillLogBatch(body);
      return res.status(201).json(billLogs);
    } catch (err: any) {
      res.status(HttpStatus.BAD_REQUEST).json({ error: err.message });
      return;
    }
  }

  @Patch(":id")
  async updateBillLog(@Body() body, @Param() params, @Res() res: Response) {
    try {
      const { id } = params;
      const billLog = await this.billLogService.updateBillLog(id, body);
      return res.status(200).json(billLog);
    } catch (err: any) {
      res.status(HttpStatus.BAD_REQUEST).json({ error: err.message });
      return;
    }
  }
}
