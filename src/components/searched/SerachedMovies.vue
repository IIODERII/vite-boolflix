<template>
  <div class="py-5">
    <h2 class="fs-1 pb-3">Film</h2>

    <div class="row position-relative">
      <CardComponent
        v-for="movie in store.searchedMovieList"
        :titolo="movie.title"
        :originalTitle="movie.original_title"
        :language="movie.original_language"
        :votes="movie.vote_average"
        :image="movie.poster_path"
      />

      <div class="default-page" v-if="!store.movieFound">
        <h2 class="display-5 fw-bold">
          Nessun risultato corrispondente alla ricerca
        </h2>
      </div>
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

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;
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
</style>
