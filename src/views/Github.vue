<template>
  <div class="emails-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">Github Page</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <div class="col-md-8 m-auto">
          <div class="form-group d-flex">
            <input
              type="text"
              class="form-control"
              id="txt-title"
              placeholder="User name ..."
              v-model="userName"
              v-on:keyup.13="getRepo"
            />
            <button class="btn btn-light border ml-2" @click="getRepo">
              Enter
            </button>
          </div>
        </div>
        <div class="col-md-8 m-auto">
          <RepoList :isLoading="isRepoLoading" :repos="repo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_REPO } from "@/store/actions.type";
import RepoList from "../components/RepoList";

export default {
  name: "github",
  components: {
    RepoList
  },
  data() {
    return {
      userName: ""
    };
  },
  mounted() {},
  computed: {
    ...mapGetters(["repo", "isRepoLoading"])
  },
  methods: {
    fetchRepo() {
      this.$store.dispatch(FETCH_REPO, this.userName);
    },

    getRepo() {
      this.fetchRepo();
    }
  }
};
</script>
