import { SubscribeService } from "@/common/api.service";
import { SUBSCRIBE } from "./actions.type";
import { START_SEND_EMAIL, END_SEND_EMAIL, SET_ERROR } from "./mutations.type";

const state = {
  sending: false,
  data: []
};

const getters = {
  sending(state) {
    return state.sending;
  },
  data(state) {
    return state.data;
  }
};

const actions = {
  [SUBSCRIBE]({ commit }, params) {
    commit(START_SEND_EMAIL);
    return SubscribeService.post(
      "http://127.0.0.1:8000/api/v1/subscribe",
      params
    )
      .then(res => {
        commit(END_SEND_EMAIL, res);
      })
      .catch(error => {
        commit(SET_ERROR, error);
      });
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [START_SEND_EMAIL](state) {
    state.sending = true;
  },
  [END_SEND_EMAIL](state, res) {
    state.sending = false;
    state.data = res.data;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
