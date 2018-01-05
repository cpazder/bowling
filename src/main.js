import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import * as firebase from 'firebase'
import App from './App'
import router from './router'
import { store } from './store'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCyYA40PnNRDLGoyESLXpiQtgi4TM3WN3U',
      authDomain: 'bowling-a71f1.firebaseapp.com',
      databaseURL: 'https://bowling-a71f1.firebaseio.com',
      projectId: 'bowling-a71f1',
      storageBucket: 'bowling-a71f1.appspot.com'
    })
  }
})
