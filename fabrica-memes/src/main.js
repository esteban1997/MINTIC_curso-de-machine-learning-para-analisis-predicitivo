import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
import router from './router/index'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyByGDeoX_VCD7b2GpURxyIL93571c1XUX4",
  authDomain: "fabrica-memes-cad84.firebaseapp.com",
  databaseURL: "https://fabrica-memes-cad84.firebaseio.com",
  projectId: "fabrica-memes-cad84",
  storageBucket: "fabrica-memes-cad84.appspot.com",
  messagingSenderId: "682344852356",
  appId: "1:682344852356:web:d1d06db584258bb7df0bd1",
  measurementId: "G-NECSC0HXNE"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
export const firestore = firebaseApp.firestore()
export const storage = firebase.storage().ref('/images')

new Vue({
  vuetify,
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app')
