<template>
  <div class="d-flex justify-content-between align-items-center">
    <h1 class="p-3 text-uppercase">Boolflix</h1>

    <div
      class="p-4 position-relative fs-5 to-search"
      @click="store.page = 'search'"
    >
      <i class="fa-solid fa-magnifying-glass"></i>
      <strong class="ps-2">Cerca</strong>
    </div>
  </div>
</template>

<script>
import { store } from "../../store";

export default {
  name: "HeaderMain",
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

.d-flex {
  background-color: $primaryColor;
  color: $tertiaryColor;

  .to-search {
    cursor: pointer;
    transition: all 0.3s ease;
    color: $whiteColor;

    &:hover {
      background-color: $secondaryColor;
      color: $tertiaryColor;
    }
  }
}
</style>
