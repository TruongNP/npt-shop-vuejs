<template>
  <div v-if="repo" class="repo-preview">
    <a class="text-dark" :href="repo.html_url">{{ repo.name }}</a>
  </div>
</template>

<script>
export default {
  name: "RwvRepoPreview",
  components: {},
  props: {
    repo: { type: Object, required: true }
  },
  computed: {}
};
</script>
