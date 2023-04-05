import { defineStore } from "pinia";
import axios from "../axios-auth.js";

export const useUserSessionStore = defineStore("userSession", {
  state: () => ({
    jwt: "",
    email: "",
    userId: "",
  }),
  getters: {
    isAuthenticated: (state) => state.jwt !== "",
  },
  actions: {
    localLogin() {
      this.jwt = localStorage.getItem("jwt");
      this.email = localStorage.getItem("email"); // localStorage['email']
      this.userId = localStorage.getItem("id");
    },
    login(email, password) {
      return new Promise((resolve, reject) => {
        axios
          .post("/users/login", {
            email: email,
            password: password,
          })
          .then((response) => {
            console.log(response);
            this.jwt = response.data.jwt;
            this.email = response.data.email;
            this.userId = response.data.id;

            localStorage.setItem("jwt", this.jwt);
            localStorage.setItem("email", this.email);
            localStorage.setItem("id", this.userId);

            axios.defaults.headers.common["Authorization"] =
              "Bearer" + this.jwt;
            console.log("logged in automatically");
            console.log(response.data.jwt);
            resolve();
          })
          .catch((error) => {
            console.log(error);
            reject(error.response.data.errorMessage);
          });
      });
    },
    logout() {
      this.jwt = "";
      this.email = "";
      localStorage.removeItem("jwt");
      localStorage.removeItem("email");
      delete axios.defaults.headers.common["Authorization"];
    },
  },
});
