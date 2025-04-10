import axiosClient from "./axiosClient";

class AuthService {
  signIn(data: any) {
    return axiosClient.post("auth/sign-in", data);
  }

  signUp(data: any) {
    return axiosClient.post("auth/sign-up", data);
  }

  refreshToken(data: any) {
    return axiosClient.post("auth/refresh-token", data);
  }
}

const authService = new AuthService();
export default authService;
