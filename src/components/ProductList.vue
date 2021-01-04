<template>
  <div>
    <Loading v-if="isLoading" />
    <div v-else>
      <div class="product-grid d-flex">
        <h4 v-if="list.length === 0">No repos are here... yet.</h4>
        <Product
          v-for="(product, index) in list"
          :product="product"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product";
import Loading from "./Loading";

export default {
  name: "ProductList",
  components: {
    Product,
    Loading
  },
  props: {
    list: {
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
