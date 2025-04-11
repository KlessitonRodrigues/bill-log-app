import { objToQuery } from "src/utils/http";
import axiosClient from "./axiosClient";

class BillService {
  getBillLogs(filters: any) {
    const query = objToQuery(filters);
    return axiosClient.get(`bill-logs${query}`);
  }

  createBillLog(data: Form.BillLog) {
    return axiosClient.post("bill-logs", data);
  }
}

const billService = new BillService();
export default billService;
