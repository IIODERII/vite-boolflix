<template>
  <div>
    <div class="row py-5">
      <h2 class="fs-1 pb-3">Series</h2>
      <CardComponent
        v-for="serie in store.searchedSeriesList"
        :titolo="serie.name"
        :originalTitle="serie.original_name"
        :language="serie.original_language"
        :votes="serie.vote_average"
        :image="serie.poster_path"
      />
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

<style lang="scss" scoped></style>
