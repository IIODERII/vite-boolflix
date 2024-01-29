<template>
  <div>
    <button @click="start()" class="btn btn-primary">Cliccami</button>
    <WelcomePage v-if="store.page === 'welcome'" />
    <UsersComponent v-else-if="store.page === 'users'" />
    <MainPage v-else-if="store.page === 'home'" />
    <SearchPage v-else-if="store.page === 'search'" />
  </div>
</template>

<script>
import SearchPage from "./components/search/SearchPage.vue";
import MainPage from "./components/main/MainPage.vue";
import { store } from "./store";
import WelcomePage from "./components/WelcomePage.vue";
import UsersComponent from "./components/UsersComponent.vue";
export default {
  components: {
    SearchPage,
    MainPage,
    WelcomePage,
    UsersComponent,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    start() {
      const windowFeatures = "directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,width=400,height=350";
      window.open(
        "https://www.mozilla.org/",
        "chromeWindow",
        windowFeatures,
      );
    }
  },
};
</script>

<style lang="scss" scoped></style>
