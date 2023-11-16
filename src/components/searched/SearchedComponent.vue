<template>
  <main class="position-relative">
    <LoadingComponent v-if="store.loading" />

    <div class="default-page" v-if="!store.movieFound && !store.seriesFound">
      <h2 class="display-1 fw-bold">
        Nessun risultato corrispondente alla tua ricerca
      </h2>
    </div>

    <div
      class="default-page"
      v-else-if="
        store.searchedMovieList.length === 0 &&
        store.searchedSeriesList.length === 0
      "
    >
      <h2 class="display-1 fw-bold">Cerca film o serie TV</h2>
    </div>

    <div class="container" v-else>
      <SearchedMovies />

      <SearchedSeries />
    </div>
  </main>
</template>

<script>
import { store } from "../../store";
import SearchedMovies from "./SerachedMovies.vue";
import SearchedSeries from "./SearchedSeries.vue";
import LoadingComponent from "../LoadingComponent.vue";

export default {
  name: "SearchedComponent",
  components: {
    SearchedMovies,
    SearchedSeries,
    LoadingComponent,
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
  min-height: calc(100vh - 88px);

  .default-page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $secondaryColor;
  }
}
</style>
