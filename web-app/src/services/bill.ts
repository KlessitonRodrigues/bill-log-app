import axiosClient from "./axiosClient";

class BillService {
  getBillLogs() {
    return axiosClient.get("bill-logs");
  }

  createBillLog(data: Form.BillLog) {
    return axiosClient.post("bill-logs", data);
  }
}

const billService = new BillService();
export default billService;
