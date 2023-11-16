<template>
  <div class="pt-5">
    <h2 class="fs-1">Film</h2>

    <div class="row position-relative g-3">
      <CardComponent
        v-for="movie in store.searchedMovieList"
        :titolo="movie.title"
        :originalTitle="movie.original_title"
        :language="movie.original_language"
        :votes="movie.vote_average"
        :image="movie.poster_path"
        :trama="movie.overview"
      />

      <div class="default-page" v-if="!store.movieFound">
        <h2 class="display-5 fw-bold py-5">
          Nessun risultato corrispondente alla ricerca
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../../../store";
import CardComponent from "../../cards/CardComponent.vue";
export default {
  name: "SrachedMovies",
  components: {
    CardComponent,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/partials/variables" as *;
.default-page {
  background-color: $secondaryColor;
  text-align: center;
}
</style>
