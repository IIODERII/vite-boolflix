<template>
  <main class="text-white">
    <LoadingComponent v-if="store.loading" />

    <!-- <div class="jumbo">
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/8uJih78e4rY?autoplay=1"
      >
      </iframe>
    </div> -->
    <div class="container-fluid">
      <div class="my-list py-5">
        <h2 class="display-5 fw-bold">Film più popolari</h2>
        <div>
          <SliderMovie :items="popularMovies" />
        </div>
      </div>

      <div class="my-list py-5">
        <h2 class="display-5 fw-bold">Film acclamati dalla critica</h2>
        <div>
          <SliderMovie :items="topRatedMovies" />
        </div>
      </div>

      <div class="my-list py-5">
        <h2 class="display-5 fw-bold">Film in uscita</h2>
        <div>
          <SliderMovie :items="upcomingMovies" />
        </div>
      </div>

      <div class="my-list py-5">
        <h2 class="display-5 fw-bold">Serie TV più popolari</h2>
        <div>
          <SliderSeries :items="topRatedSeries" />
        </div>
      </div>

      <div class="my-list py-5">
        <h2 class="display-5 fw-bold">Serie TV acclamate dalla critica</h2>
        <div>
          <SliderSeries :items="popularSeries" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SliderMovie from "./SliderMovie.vue";
import LoadingComponent from "../LoadingComponent.vue";
import axios from "axios";
import { store } from "../../store";
import SliderSeries from "./SliderSeries.vue";
export default {
  name: "MainComponent",
  components: {
    SliderMovie,
    LoadingComponent,
    SliderSeries,
  },
  data() {
    return {
      store,
      popularMovies: [],
      topRatedMovies: [],
      upcomingMovies: [],
      topRatedSeries: [],
      popularSeries: [],
      mainParams: {
        api_key: store.params.api_key,
        language: "it",
      },
    };
  },
  methods: {
    getElements() {
      this.store.loading = true;
      const popularMoviesurl =
        this.store.apiUrl + this.store.endPoint.popularMovies;
      axios.get(popularMoviesurl, { params: this.mainParams }).then((resp) => {
        console.log(resp.data.results);
        this.popularMovies = resp.data.results;
        this.store.loading = false;
      });
      this.store.loading = true;
      const upcomingMoviesurl =
        this.store.apiUrl + this.store.endPoint.upcomingMovies;
      axios.get(upcomingMoviesurl, { params: this.mainParams }).then((resp) => {
        console.log(resp.data.results);
        this.upcomingMovies = resp.data.results;
        this.store.loading = false;
      });
      this.store.loading = true;
      const topRatedMoviesurl =
        this.store.apiUrl + this.store.endPoint.topRatedMovies;
      axios.get(topRatedMoviesurl, { params: this.mainParams }).then((resp) => {
        console.log(resp.data.results);
        this.topRatedMovies = resp.data.results;
        this.store.loading = false;
      });
      this.store.loading = true;
      const popularSeriesurl =
        this.store.apiUrl + this.store.endPoint.popularSeries;
      axios.get(popularSeriesurl, { params: this.mainParams }).then((resp) => {
        console.log(resp.data.results);
        this.popularSeries = resp.data.results;
        this.store.loading = false;
      });
      this.store.loading = true;
      const topRatedSeriesurl =
        this.store.apiUrl + this.store.endPoint.topRatedSeries;
      axios.get(topRatedSeriesurl, { params: this.mainParams }).then((resp) => {
        console.log(resp.data.results);
        this.topRatedSeries = resp.data.results;
        this.store.loading = false;
      });
    },
  },
  created() {
    this.getElements();
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

main {
  min-height: calc(100vh - 88px);
  background-color: $secondaryColor;
  padding: 10px;

  h2 {
    margin-bottom: -60px;
  }
}
</style>
