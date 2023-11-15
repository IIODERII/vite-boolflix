<template>
  <HeaderComponent />

  <SearchedComponent />
</template>

<script>
import axios from "axios";
import { store } from "./store";
import HeaderComponent from "./components/HeaderComponent.vue";
import SearchedComponent from "./components/searched/SearchedComponent.vue";

export default {
  components: {
    HeaderComponent,
    SearchedComponent,
  },
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
