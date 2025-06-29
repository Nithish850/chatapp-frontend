import axios from "axios";

export class AuthService {
  async login(email: string, password: string) {
    const res = axios.post("", {
      email: email,
      password: password,
    });
    console.log(res);
  }
}
