import { ProductService } from "@/common/api.service";
import { FETCH_PRODUCT } from "./actions.type";
import {
  FETCH_START_PRODUCT,
  FETCH_END_PRODUCT,
  SET_ERROR_PRODUCT
} from "./mutations.type";

const state = {
  products: [],
  isProductLoading: false,
  error: []
};

const getters = {
  products(state) {
    return state.products;
  },
  isProductLoading(state) {
    return state.isProductLoading;
  },
  error(state) {
    return state.error;
  }
};

const actions = {
  [FETCH_PRODUCT]({ commit }) {
    commit(FETCH_START_PRODUCT);
    return ProductService.get(`http://127.0.0.1:8000/api/v1/products`)
      .then(({ data }) => {
        commit(FETCH_END_PRODUCT, data.products);
      })
      .catch(error => {
        commit(SET_ERROR_PRODUCT, error);
      });
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [FETCH_START_PRODUCT](state) {
    state.isProductLoading = true;
  },
  [FETCH_END_PRODUCT](state, products) {
    state.products = products;
    state.isProductLoading = false;
  },
  [SET_ERROR_PRODUCT](state, error) {
    (state.error = error), (state.isProductLoading = false);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
