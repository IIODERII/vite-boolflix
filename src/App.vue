<template>
  <HeaderComponent />

  <SearchedComponent />
</template>

<script>
import axios from "axios";
import { store } from "./store";
import HeaderComponent from "./components/HeaderComponent.vue";
import SearchedComponent from "./components/searched/SearchedComponent.vue";

export default {
  components: {
    HeaderComponent,
    SearchedComponent,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
