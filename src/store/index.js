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
    setLoadedScores(state, payload) {
      state.loadedScores = payload
    },
    setUser(state, payload) {
      state.user = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {
    loadScores({ commit }) {
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
    signUserUp({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
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
    signUserIn({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
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
    clearError({ commit }) {
      commit('clearError')
    }
  },
  autoSignIn({ commit }, payload) {
    commit('setUser', {
      id: payload.uid
    })
  },
  getters: {
    loadedScores(state) {
      return state.loadedScores
    },
    user(state) {
      return state.user
    },
    loading(state) {
      return state.loading
    },
    error(state) {
      return state.error
    }
  },
  plugins: [vuexLocal.plugin]
})
