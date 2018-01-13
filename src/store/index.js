import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export const store = new Vuex.Store({
  state: {
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    setLoadedSchedule (state, payload) {
      state.loadedSchedule = payload
    },
    setLoadedScores (state, payload) {
      state.loadedScores = payload
    },
    setLoadedProfile (state, payload) {
      state.loadedProfile = payload
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    loadScores ({ commit }) {
      commit('setLoading', true)
      firebase
               .database()
               .ref('scores')
               .once('value')
               .then(data => {
                 const scores = []
                 const obj = data.val()
                 for (let key in obj) {
                   scores.push({
                     id: key,
                     date: obj[key].Date,
                     bowler: obj[key].Bowler,
                     gm1: obj[key].Gm1,
                     gm2: obj[key].Gm2,
                     gm3: obj[key].Gm3,
                     week: obj[key].Week,
                     total: obj[key].SS
                   })
                 }
                 commit('setLoadedScores', scores)
                 commit('setLoading', false)
               })
               .catch(error => {
                 console.log(error)
                 commit('setLoading', true)
               })
    },
    loadSchedule ({ commit }) {
      commit('setLoading', true)
      firebase
               .database()
               .ref('schedule')
               .once('value')
               .then(data => {
                 const schedule = []
                 const obj = data.val()
                 for (let key in obj) {
                   schedule.push({
                     id: key,
                     date: obj[key].Date,
                     bowler1: obj[key].Bowler1,
                     bowler2: obj[key].Bowler2,
                     bowler3: obj[key].Bowler3,
                     bowler4: obj[key].Bowler4,
                     bowler5: obj[key].Bowler5
                   })
                 }
                 commit('setLoadedSchedule', schedule)
                 commit('setLoading', false)
               })
               .catch(error => {
                 console.log(error)
                 commit('setLoading', true)
               })
    },
    loadProfile ({ commit }) {
      commit('setLoading', true)
      firebase
        .database()
        .ref('roster')
        .once('value')
        .then(data => {
          const profile = []
          const obj = data.val()
          for (let key in obj) {
            profile.push({
              id: key,
              bowler: obj[key].Bowlers,
              average: obj[key].Average,
              phone: obj[key].PhoneNumber,
              weeks: obj[key]['Count of Week']
            })
          }
          commit('setLoadedProfile', profile)
          commit('setLoading', false)
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', true)
        })
    },
    signUserUp ({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          payload.email,
          payload.password
        )
        .then(user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid
          }
          commit('setUser', newUser)
        })
        .catch(error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        })
    },
    signUserIn ({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase
        .auth()
        .signInWithEmailAndPassword(
          payload.email,
          payload.password
        )
        .then(user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid
          };
          commit('setUser', newUser)
        })
        .catch(error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        })
    },
    clearError ({ commit }) {
      commit('clearError')
    }
  },
  autoSignIn ({ commit }, payload) {
    commit('setUser', {
      id: payload.uid
    })
  },
  getters: {
    loadedScores (state) {
      return state.loadedScores
    },
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    },
    loadedSchedule (state) {
      return state.loadedSchedule
    },
    loadedProfile (state) {
      return state.loadedProfile
    }
  },
  plugins: [vuexLocal.plugin]
})
