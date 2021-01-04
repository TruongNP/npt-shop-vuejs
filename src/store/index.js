import Vue from "vue";
import Vuex from "vuex";

import home from "./home.module";
import auth from "./auth.module";
import article from "./article.module";
import profile from "./profile.module";
import github from "./github.module";
import shop from "./shop.module";
import footer from "./footer.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    auth,
    article,
    profile,
    github,
    shop,
    footer
  }
});
