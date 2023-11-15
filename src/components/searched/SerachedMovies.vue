<template>
  <div>
    <div class="row py-5">
      <h2 class="fs-1 pb-3">Movies</h2>
      <CardComponent
        v-for="movie in store.searchedMovieList"
        :titolo="movie.title"
        :originalTitle="movie.original_title"
        :language="movie.original_language"
        :votes="movie.vote_average"
        :image="movie.poster_path"
      />
    </div>
  </div>
</template>

<script>
import { store } from "../../store";
import CardComponent from "../cards/CardComponent.vue";
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

<style lang="scss" scoped></style>
