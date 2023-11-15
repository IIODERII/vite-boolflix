<template>
  <div class="container">
    <h2>Movies</h2>
    <div>
      <div class="row">
        <div class="col-3" v-for="movie in store.searchedMovieList">
          <img
            :src="store.imagePath + movie.poster_path"
            :alt="movie.title"
            class="w-100"
          />
          {{ movie.title }}
        </div>
      </div>
    </div>
    <h2>Series</h2>
    <div>
      <div class="row">
        <div class="col-3" v-for="serie in store.searchedSeriesList">
          <img
            :src="store.imagePath + serie.poster_path"
            :alt="serie.name"
            class="w-100"
          />
          {{ serie.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "./store";
export default {
  data() {
    return {
      store,
    };
  },
  created() {
    const searchMovieurl = this.store.apiUrl + this.store.endPoint.movie;
    axios.get(searchMovieurl, { params: this.store.params }).then((resp) => {
      console.log(resp.data.results);
      this.store.searchedMovieList = resp.data.results;
    });
    const searchSeriesurl = this.store.apiUrl + this.store.endPoint.series;
    axios.get(searchSeriesurl, { params: this.store.params }).then((resp) => {
      console.log(resp.data.results);
      this.store.searchedSeriesList = resp.data.results;
    });
  },
};
</script>

<style lang="scss" scoped></style>
