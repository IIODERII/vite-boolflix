<template>
  <WelcomePage v-if="store.page === 'welcome'" />
  <MainPage v-else-if="store.page === 'main'" />
  <SearchPage v-else />
</template>

<script>
import SearchPage from "./components/search/SearchPage.vue";
import MainPage from "./components/main/MainPage.vue";
import { store } from "./store";
import WelcomePage from "./components/WelcomePage.vue";
export default {
  components: {
    SearchPage,
    MainPage,
    WelcomePage,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
