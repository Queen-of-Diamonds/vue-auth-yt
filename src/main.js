import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtATywogktOBEcXBzOHs-rsLKKlRukVOc",
  authDomain: "vue-auth-yt-7e715.firebaseapp.com",
  projectId: "vue-auth-yt-7e715",
  storageBucket: "vue-auth-yt-7e715.appspot.com",
  messagingSenderId: "400279449705",
  appId: "1:400279449705:web:08abb14027d2a267d772f8",
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
