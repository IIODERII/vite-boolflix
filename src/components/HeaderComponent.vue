<template>
  <div class="d-flex justify-content-between align-items-center">
    <h1 class="p-3">Boolzap</h1>

    <div class="d-flex align-items-center px-4 position-relative">
      <input
        type="text"
        class="form-control mx-3"
        v-model="store.params.query"
        placeholder="Cerca film o serie TV"
        @keyup.enter="search()"
      />
      <button class="btn fw-bold" @click="search()">Cerca</button>
      <span v-if="store.params.query" @click="emptyQuery()">X</span>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
import axios from "axios";

export default {
  name: "HeaderComponent",
  data() {
    return {
      store,
    };
  },
  methods: {
    search() {
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

    emptyQuery() {
      this.store.params.query = "";
      this.search();
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.d-flex {
  background-color: $primaryColor;
  color: $tertiaryColor;
  button {
    background-color: $tertiaryColor;

    &:hover {
      color: $whiteColor;
      background-color: $tertiaryHover;
      transition: all 0.1s ease-in-out;
    }
  }

  span {
    position: absolute;
    top: 0.5em;
    right: 35%;

    &:hover {
      cursor: pointer;
      font-weight: bold;
    }
  }
}
</style>
