<template>
  <v-container class="container">
    <v-row justify="space-around">
      <v-card width="400" class="px-10 py-10 rounded-xl shadow-panel">
        <v-img
          src="../assets/paikee-logo-name.png"
          class="mx-auto mb-10"
          height="auto"
          width="200"
        ></v-img>
        <v-form ref="form" @submit.prevent="login" v-model="valid">
          <v-text-field
            :rules="usernameRules"
            class="my-4 rounded-lg"
            flat
            hide-details
            label="Nombre de usuario"
            prepend-inner-icon="mdi-account-outline"
            required
            solo
            v-model="username"
          ></v-text-field>

          <v-text-field
            :rules="usernameRules"
            class="my-4 rounded-lg"
            flat
            hide-details
            label="Contraseña"
            prepend-inner-icon="mdi-lock-outline"
            required
            single-line
            solo
            type="password"
            v-model="pass"
          ></v-text-field>

          <span class="text-caption grey--text">
            ¿Olvidaste tu contraseña?
            <a target="_blank" href="https://vuetifyjs.com"> Recuperar </a>
          </span>

          <v-spacer class="mb-10"></v-spacer>

          <v-btn
            block
            large
            class="text-capitalize"
            color="primary"
            elevation="0"
            :disabled="!valid"
            type="submit"
            :loading="loading"
          >
            Iniciar sesión
          </v-btn>
          <!-- 
          <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

          <v-btn color="warning" @click="resetValidation">
            Reset Validation
          </v-btn> -->
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
import store from "../store/index.js";

export default {
  data: () => ({
    loading: false,
    valid: false,
    username: "",
    pass: "",
    usernameRules: [(v) => !!v || "E-mail is required"],
    passRules: [
      (v) => !!v || "La contraseña es requerida.",
      (v) => v.length > 0 || "aslkjskl",
    ],
  }),

  methods: {
    login() {
      if (this.valid) {
        this.loading = true;
        axios
          .post("/auth/login/", {
            username: this.username,
            password: this.pass,
          })
          .then((response) => {
            console.log(response);
            // TODO: Find the best way to do this
            store.state.user = {
              token: response.data.token,
              isAuthenticated: true,
              name: this.username,
            };
            localStorage.setItem("user", JSON.stringify(store.state.user));
            this.loading = false;
            this.$router.push("/");
          })
          .catch((error) => {
            console.log(error);
            this.loading = false;
          });
      } else {
        console.log("Invalid");
      }
    },
    validate() {
      this.$refs.form.validate();
      console.log(this.valid);
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
<style scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: auto;
}
.shadow-panel {
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.1) !important;
  border: 1px solid rgb(154, 154, 154, 0.2) !important;
}

.v-text-field .v-input__slot {
  transition: all;
  transition-duration: 0.3s;
  background-color: rgba(224, 224, 224, 0.2) !important;
  border: 1px solid rgba(224, 224, 224, 0.5) !important;
}
</style>
