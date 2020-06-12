import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios';


const scoreModule = {
  namespaced: true,
  state: {
    scores: null
  },
  actions: {
    getScores(context) {
      const query = JSON.stringify({
        query: `query getScores {
          score {
              address
              avgScore
              droughtScore
              fireScore
              floodScore
              rainScore
              temperatureScore
          }
        }`,
        variables: {}
      });

      const reqConfig = {
        method: 'post',
        url: 'https://hasura-test-0608.herokuapp.com/v1/graphql',
        headers: {
          'Content-Type': 'application/json'
        },
        data: query
      };

      axios(reqConfig)
        .then((res) => {
          context.commit('setScores', res.data.data.score[0])
        })
        .catch((err) => {
          console.log(err);
          context.commit('setScores', {})
        });
    }
  },
  mutations: {
    setScores(state, scores) {
      state.scores = { ...scores }
    }
  }
}

export default new Vuex.Store({
  modules: {
    score: scoreModule
  }
})