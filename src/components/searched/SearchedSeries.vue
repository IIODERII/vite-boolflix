<template>
  <div class="py-5">
    <h2 class="fs-1 pb-2">Serie TV</h2>
    <div class="row g-3">
      <CardComponent
        v-for="serie in store.searchedSeriesList"
        :titolo="serie.name"
        :originalTitle="serie.original_name"
        :language="serie.original_language"
        :votes="serie.vote_average"
        :image="serie.poster_path"
        :trama="serie.overview"
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
import { store } from "../../store";
import CardComponent from "../cards/CardComponent.vue";
export default {
  name: "SearchedSeries",
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
