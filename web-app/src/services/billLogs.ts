import axiosClient from "./axiosClient";

class BillLogsService {
  getBillLogs() {
    return axiosClient.get("bill-logs");
  }
}

const billLogService = new BillLogsService();
export default billLogService;
