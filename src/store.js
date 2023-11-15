import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/",
  endPoint: {
    movie: "search/movie",
    series: "search/tv",
  },
  params: {
    api_key: "3d1d44f45c31beb4fa420771967796c4",
    query: "",
  },
  error: "",
  loading: false,
  searchedMovieList: [],
  searchedSeriesList: [],
  imagePath: "https://image.tmdb.org/t/p/original",
});
