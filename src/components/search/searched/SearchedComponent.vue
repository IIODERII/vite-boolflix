<template>
  <main class="position-relative">
    <LoadingComponent v-if="store.loading" />

    <div class="p-3 d-flex">
      <div class="px-2">
        <label for="movieGenres" class="pb-2">Generi dei film</label>

        <select
          class="form-select"
          aria-label="Default select example"
          name="movieGenres"
          id="movieGenres"
          v-model="store.activeMovieGenre"
          @change="filterMovies()"
        >
          <option selected value="">Tutti</option>
          <option v-for="genere in this.movieGenres" :value="genere">
            {{ genere }}
          </option>
        </select>
      </div>
      <div class="px-2">
        <label for="serieGenres" class="pb-2">Generi delle serie</label>

        <select
          class="form-select"
          aria-label="Default select example"
          name="serieGenres"
          id="serieGenres"
          v-model="store.activeSerieGenre"
          @change="filterSeries()"
        >
          <option selected value="">Tutti</option>
          <option v-for="genere in this.seriesGenres" :value="genere">
            {{ genere }}
          </option>
        </select>
      </div>
    </div>

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
      <SearchedMovies :genere="activeMovieGenre" />

      <SearchedSeries />
    </div>
  </main>
</template>

<script>
import { store } from "../../../store";
import SearchedMovies from "./SerachedMovies.vue";
import SearchedSeries from "./SearchedSeries.vue";
import LoadingComponent from "../../LoadingComponent.vue";
import axios from "axios";

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
      searchParams: {
        api_key: store.params.api_key,
        language: "it",
      },
      movieGenres: [],
      seriesGenres: [],
    };
  },
  methods: {
    callGenres() {
      store.loading = true;
      store.movieFound = true;
      store.seriesFound = true;
      const searchMovieGenres = "https://api.themoviedb.org/3/genre/movie/list";
      axios
        .get(searchMovieGenres, { params: this.searchParams })
        .then((resp) => {
          resp.data.genres.forEach((genere) => {
            this.movieGenres.push(genere.name);
          });
        })
        .catch((error) => {
          console.log(error);
        });

      store.movieFound = true;
      store.seriesFound = true;
      const searchSeriegenres = "https://api.themoviedb.org/3/genre/tv/list";
      axios
        .get(searchSeriegenres, { params: this.searchParams })
        .then((resp) => {
          resp.data.genres.forEach((genere) => {
            this.seriesGenres.push(genere.name);
          });
          store.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    filterMovies() {
      if (this.store.activeMovieGenre !== "") {
        this.store.filteredMovies = this.store.searchedMovieList.filter(
          (movie) => movie.genres.includes(this.store.activeMovieGenre)
        );
      } else {
        this.store.filteredMovies = this.store.searchedMovieList;
      }
    },

    filterSeries() {
      if (this.store.activeSerieGenre) {
        this.store.filteredSeries = this.store.searchedSeriesList.filter(
          (serie) => serie.genres.includes(this.store.activeSerieGenre)
        );
      } else {
        this.store.filteredSeries = this.store.searchedSeriesList;
      }
    },
  },
  created() {
    this.callGenres();
    this.filterMovies();
    this.filterSeries();
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/partials/variables" as *;

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

  select,
  label {
    position: relative;
    z-index: 2;
    border: none;
    width: auto;

    option {
      background-color: $secondaryColor;
      color: $whiteColor;
    }
  }
}
</style>
