<template>
  <main>
    <div class="container">
      <SearchedMovies />

      <SearchedSeries />
    </div>
  </main>
</template>

<script>
import { store } from "../../store";
import SearchedMovies from "./SerachedMovies.vue";
import SearchedSeries from "./SearchedSeries.vue";

export default {
  name: "SearchedComponent",
  components: {
    SearchedMovies,
    SearchedSeries,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

main {
  background-color: $secondaryColor;
  color: $whiteColor;
}
</style>
