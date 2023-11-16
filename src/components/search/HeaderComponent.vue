<template>
  <div class="d-flex justify-content-between align-items-center">
    <h1 class="p-3 text-uppercase">Boolflix</h1>

    <div class="px-4 position-relative">
      <div
        class="d-none d-sm-flex align-items-center"
        :style="searchStyle"
        @mouseleave="searchStyle = ''"
      >
        <input
          type="text"
          class="form-control mx-3"
          v-model="store.params.query"
          placeholder="Cerca film o serie TV"
          @keyup.enter="search()"
        />
        <button class="btn fw-bold" @click="search()">Cerca</button>
        <span v-if="store.params.query" @click="emptyQuery()"
          ><i class="fa-solid fa-xmark"></i
        ></span>
      </div>

      <div class="icon text-white">
        <i
          class="fa-solid fa-magnifying-glass d-sm-none"
          @click="activeSearch()"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../../store";
import axios from "axios";

export default {
  name: "HeaderComponent",
  data() {
    return {
      store,
      searchStyle: "",
    };
  },
  methods: {
    search() {
      this.store.loading = true;
      this.store.movieFound = true;
      this.store.seriesFound = true;
      const searchMovieurl = this.store.apiUrl + this.store.endPoint.movie;
      axios.get(searchMovieurl, { params: this.store.params }).then((resp) => {
        console.log(resp.data.results);
        this.store.searchedMovieList = resp.data.results;
        if (resp.data.results.length === 0) {
          this.store.movieFound = false;
        }
        this.store.loading = false;
      });
      const searchSeriesurl = this.store.apiUrl + this.store.endPoint.series;
      axios.get(searchSeriesurl, { params: this.store.params }).then((resp) => {
        console.log(resp.data.results);
        this.store.searchedSeriesList = resp.data.results;
        if (resp.data.results.length === 0) {
          this.store.seriesFound = false;
        }
        this.store.loading = false;
      });
    },

    emptyQuery() {
      this.store.params.query = "";
      this.store.searchedMovieList = [];
      this.store.searchedSeriesList = [];
      this.store.movieFound = true;
      this.store.seriesFound = true;
    },

    activeSearch() {
      if (!this.searchStyle) {
        this.searchStyle =
          "z-index: 100; width: 100vw !important; display:flex !important; position: absolute; right: 0; bottom: -15%;";
      } else {
        this.searchStyle = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

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
    right: 125px;

    &:hover {
      cursor: pointer;
      font-weight: bold;
    }
  }

  .icon {
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: $tertiaryHover;
      transform: scale(1.3);
    }
  }
}
</style>
