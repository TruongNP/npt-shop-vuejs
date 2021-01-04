<template>
  <div v-if="product" class="product text-center">
    <a class="d-flex" :href="product.slug">
      <img :src="'http://127.0.0.1:8000' + product.feature_image" />
    </a>
    <a
      class="d-flex mt-2 justify-content-center text-primary"
      :href="product.slug"
      >{{ product.title }}</a
    >
    <h6 class="mt-2">${{ product.price }}</h6>
  </div>
</template>

<script>
export default {
  name: "Product",
  components: {},
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {}
};
</script>
