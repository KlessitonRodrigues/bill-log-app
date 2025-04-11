import axiosClient from "./axiosClient";

class UserService {
  getUserData() {
    return axiosClient.get("user/me");
  }
}

const userService = new UserService();
export default userService;
