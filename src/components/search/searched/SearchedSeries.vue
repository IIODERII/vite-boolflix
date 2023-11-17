<template>
  <div class="py-5">
    <h2 class="fs-1 pb-2">Serie TV</h2>
    <div class="row g-3">
      <CardSerie
        v-for="serie in store.filteredSeries"
        :titolo="serie.name"
        :originalTitle="serie.original_name"
        :language="serie.original_language"
        :votes="serie.vote_average"
        :image="serie.poster_path"
        :trama="serie.overview"
        :bigImage="serie.backdrop_path"
        :id="serie.id"
      />
    </div>
    <div class="default-page" v-if="!store.seriesFound">
      <h2 class="display-1 fw-bold">
        Nessun risultato corrispondente alla ricerca
      </h2>
    </div>
  </div>
</template>

<script>
import { store } from "../../../store";
import CardSerie from "../../cards/CardSerie.vue";
export default {
  name: "SearchedSeries",
  components: {
    CardSerie,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/partials/variables" as *;
.default-page {
  text-align: center;
  background-color: $secondaryColor;
}
</style>
