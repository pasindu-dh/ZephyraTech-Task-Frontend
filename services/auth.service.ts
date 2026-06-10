import axios from "axios";

const API_URL = "https://zephyratech-task-backend.onrender.com/api/auth/";

class AuthService {
  login(email: string, password: string): Promise<any> {
    return axios
      .post(API_URL + "signin", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout(): void {
    localStorage.removeItem("user");
  }

  register(email: string, password: string): Promise<any> {
    return axios.post(API_URL + "signup", {
      email,
      password,
    });
  }

  getCurrentUser(): any {
    const user = typeof window !== 'undefined' ? localStorage.getItem("user") : null;
    return user ? JSON.parse(user) : null;
  }
}

export default new AuthService();
