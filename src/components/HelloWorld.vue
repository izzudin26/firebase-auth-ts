<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="100"
        />
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col md="8" sm="12">
        <v-text-field label="email" v-model="email" outlined></v-text-field>
        <v-text-field
          label="password"
          v-model="password"
          type="password"
          outlined
        ></v-text-field>
        <v-row justify="center" align="center">
          <v-btn color="primary">SignUp</v-btn>
          <v-btn color="error" @click="emailLogin">SignIn</v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-btn @click="googleLogin"><v-icon>fab fa-google</v-icon></v-btn>
      <v-btn @click="facebookLogin"><v-icon>fab fa-facebook-f</v-icon></v-btn>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import firebase from "../config";

export default Vue.extend({
  name: "HelloWorld",
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    emailLogin(): void {
      console.log(`${this.email}, ${this.password}`);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(res => {
          return console.log(res);
        })
        .catch(err => {
          return console.log(err);
        });
    },
    googleLogin(): void {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(user => {
          alert("Success Login With google");
          return console.log(user);
        })
        .catch(err => {
          return console.log(err);
        });
    },
    facebookLogin(): void {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(res => {
          return console.log(res);
        })
        .catch(err => {
          return console.log(err);
        });
    }
  }
});
</script>
