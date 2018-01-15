import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import 'vuetify/dist/vuetify.css'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.component('app-alert', AlertCmp)

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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('loadScores')
        this.$store.dispatch('loadSchedule')
        this.$store.dispatch('loadProfile')
      }
    })
  }
})
