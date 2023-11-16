<template>
  <MainPage v-if="store.page === 'main'" />
  <SearchPage v-else />
</template>

<script>
import SearchPage from "./components/search/SearchPage.vue";
import MainPage from "./components/main/MainPage.vue";
import { store } from "./store";
export default {
  components: {
    SearchPage,
    MainPage,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
