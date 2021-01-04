<template>
  <div class="shop-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">Shop Page</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <div class="col-4">
          <h3>Filter Product</h3>
        </div>
        <div class="col-md-8">
          <div class="products">
            <ProductList :isLoading="isProductLoading" :list="products" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_PRODUCT } from "@/store/actions.type";
import ProductList from "../components/ProductList";

export default {
  name: "Shop",
  components: {
    ProductList
  },
  data() {
    return {
      userName: ""
    };
  },
  mounted() {
    this.$store.dispatch(FETCH_PRODUCT);
  },
  computed: {
    ...mapGetters(["products", "isProductLoading"])
  },
  methods: {}
};
</script>
