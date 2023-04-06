import { defineStore } from "pinia";
import axios from "../axios-auth.js";

export const useUserSessionStore = defineStore("userSession", {
  state: () => ({
    jwt: "",
    email: "",
    userId: "",
    isAdmin: false,
  }),
  getters: {
    isAuthenticated: (state) => state.jwt !== "",
    isUserAdmin: (state) => state.isAdmin,
  },
  actions: {
    async localLogin() {
      if (localStorage.getItem("jwt")) {
        this.jwt = localStorage.getItem("jwt");
        this.email = localStorage.getItem("email");
        this.userId = localStorage.getItem("id");

        // Call the checkAdmin method to determine the user's admin status
        try {
          const response = await this.checkAdmin(this.jwt, this.userId);
          this.isAdmin = response.data;
          console.log("Admin status: " + response.data.isAdmin);
        } catch (error) {
          console.error(error);
        } 
        axios.defaults.headers.common["Authorization"] = "Bearer " + this.jwt;
      }
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
              "Bearer " + this.jwt;
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
    checkAdmin(jwt, id) {
      return axios.post("/users/checkAdmin/" + id, null, {
        headers: {
          Authorization: "Bearer " + jwt
        }
      });
    },
  },
});
