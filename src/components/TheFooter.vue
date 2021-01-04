<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <router-link
            class="logo-font navbar-brand"
            :to="{ name: 'home', params: {} }"
          >
            Npt Shop
          </router-link>
        </div>
        <div class="col-6">
          <div class="form-group d-flex mb-1">
            <input
              type="email"
              class="form-control"
              id="txt-title"
              placeholder="Email..."
              v-model="email"
              v-on:keyup.13="subscribe"
            />
            <button class="btn btn-light d-flex border ml-2" @click="subscribe">
              <span>Subscribe</span>
              <Loading v-if="sending" />
            </button>
          </div>
          <small
            class="text-success"
            v-if="data.success"
            v-text="data.success"
          ></small>
          <div v-if="data.error">
            <div v-for="(err, index) in data.error_detail.email" :key="index">
              <small class="text-danger" v-if="err">{{ err }}</small>
            </div>
          </div>
        </div>
      </div>
      <span class="attribution">
        Copyright © 2020
        <a href="https://fabatechnology.com/" target="blank">
          Faba Technology </a
        >. All rights reserved.
      </span>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
import { SUBSCRIBE } from "@/store/actions.type";
import Loading from "../components/Loading";

export default {
  name: "RwvFooter",
  components: {
    Loading
  },
  data() {
    return {
      email: ""
    };
  },
  mounted() {},
  computed: {
    ...mapGetters(["sending", "data"])
  },
  methods: {
    putSubscribe() {
      const data = {
        email: this.email
      };

      this.$store.dispatch(SUBSCRIBE, data);
    },

    subscribe() {
      this.putSubscribe();

      if (this.data.success) this.email = "";
    }
  }
};
</script>
