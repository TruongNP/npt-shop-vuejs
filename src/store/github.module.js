import { RepoService } from "@/common/api.service";
import { FETCH_REPO } from "./actions.type";
import { FETCH_START, FETCH_END, SET_ERROR } from "./mutations.type";

const state = {
  repo: [],
  isRepoLoading: false,
  errors: []
};

const getters = {
  repo(state) {
    return state.repo;
  },
  isRepoLoading(state) {
    return state.isRepoLoading;
  },
  errors(state) {
    return state.errors;
  }
};

const actions = {
  [FETCH_REPO]({ commit }, userName) {
    commit(FETCH_START);
    return RepoService.get(
      `https://api.github.com/users/${userName}/repos?type=all&sort=updated`
    )
      .then(({ data }) => {
        commit(FETCH_END, data);
      })
      .catch(error => {
        commit(SET_ERROR, error);
      });
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [FETCH_START](state) {
    state.isRepoLoading = true;
  },
  [FETCH_END](state, repo) {
    state.repo = repo;
    state.isRepoLoading = false;
  },
  [SET_ERROR](state, error) {
    (state.error = error), (state.isRepoLoading = false);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
