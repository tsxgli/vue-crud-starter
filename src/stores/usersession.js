import { defineStore } from "pinia";
import axios from "../axios-auth.js";

export const useUserSessionStore = defineStore("userSession", {
  state: () => ({
    jwt: "",
    username: "",
  }),
  getters: {
    isAuthenticated: (state) => state.jwt !== "",
  },
  actions: {
    localLogin() {
        this.jwt = localStorage.getItem("jwt");
        this.username = localStorage.getItem("username");// localStorage['username']
    },
    login(username, password) {
      return new Promise((resolve, reject) => {
        axios
          .post("/users/login", {
            username: username,
            password: password,
          })
          .then((response) => {
            this.jwt = response.data.jwt;
            this.username = response.data.username;

            localStorage.setItem("jwt", this.jwt);
            localStorage.setItem("username", this.username);

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
      this.username = "";
      localStorage.removeItem("jwt");
      localStorage.removeItem("username");
      delete axios.defaults.headers.common["Authorization"];
    },

  },
});
