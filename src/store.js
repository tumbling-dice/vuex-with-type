import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    search: {
      state: {
        result: []
      },
      mutations: {
        setResult(state, payload) {
          state.result = payload;
        }
      },
      actions: {
        async search({
          commit
        }, payload) {
          const body = JSON.stringify(payload);
          const resp = await fetch("/search", {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            body
          });
          commit("setResult", resp.json());
        }
      }
    }
  }
});

export default store;