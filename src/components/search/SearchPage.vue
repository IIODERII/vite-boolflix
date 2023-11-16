<template>
  <HeaderComponent />

  <SearchedComponent />
</template>

<script>
import axios from "axios";
import HeaderComponent from "./HeaderComponent.vue";
import SearchedComponent from "./searched/SearchedComponent.vue";

export default {
  name: "SearchPage",
  components: {
    HeaderComponent,
    SearchedComponent,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
