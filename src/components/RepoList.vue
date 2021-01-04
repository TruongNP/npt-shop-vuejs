<template>
  <div>
    <Loading v-if="isLoading" />
    <div v-else>
      <div v-if="repos.length === 0" class="repo-preview">
        No repos are here... yet.
      </div>
      <RepoPreview
        v-for="(repo, index) in repos"
        :repo="repo"
        :key="repo.name + index"
      />
    </div>
  </div>
</template>

<script>
import RepoPreview from "./RwvRepoPreview";
import Loading from "./Loading";

export default {
  name: "RepoList",
  components: {
    RepoPreview,
    Loading
  },
  props: {
    repos: {
      type: Array,
      required: true
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
};
</script>
