<template>
  <div class="pt-5">
    <h2 class="fs-1">Film</h2>

    <div class="row position-relative g-3">
      <CardMovie
        v-for="movie in store.filteredMovies"
        :titolo="movie.title"
        :originalTitle="movie.original_title"
        :language="movie.original_language"
        :votes="movie.vote_average"
        :image="movie.poster_path"
        :trama="movie.overview"
        :bigImage="movie.backdrop_path"
        :id="movie.id"
        :movie="movie"
        class="movie"
      />
    </div>

    <div class="default-page" v-if="!store.movieFound">
      <h2 class="display-5 fw-bold py-5">
        Nessun risultato corrispondente alla ricerca
      </h2>
    </div>
  </div>
</template>

<script>
import { store } from "../../../store";
import CardMovie from "../../cards/CardMovie.vue";
export default {
  name: "SrachedMovies",
  components: {
    CardMovie,
  },
  data() {
    return {
      store,
    };
  },
  props: {
    genere: String,
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/partials/variables" as *;
.default-page {
  background-color: $secondaryColor;
  text-align: center;
}

@media screen and (min-width: 1200px) {
  .movie {
    width: calc(100% / 4);
  }
}
</style>
