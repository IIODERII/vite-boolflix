<template>
  <div>
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
};
</script>

<style lang="scss" scoped></style>
