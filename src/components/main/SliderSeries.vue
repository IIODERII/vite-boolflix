<template>
  <div>
    <div class="d-flex justify-content-end fs-1 px-3">
      <div @click="scrollLeft" class="px-3">
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div @click="scrollRight" class="px-3">
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
    <div class="d-flex slider" :ref="'slider'">
      <CardSerie
        v-for="item in items"
        :titolo="item.name"
        :originalTitle="item.original_name"
        :language="item.original_language"
        :votes="item.vote_average"
        :trama="item.overview"
        :image="item.poster_path"
        :bigImage="item.backdrop_path"
        :id="item.id"
        class="card-slide px-1"
      />
    </div>
  </div>
</template>

<script>
import CardSerie from "../cards/CardSerie.vue";

export default {
  name: "SliderSeries",
  components: {
    CardSerie,
  },
  props: {
    items: Array,
  },
  methods: {
    scrollRight() {
      //console.log("slide");
      const slider = this.$refs.slider;
      slider.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    },
    scrollLeft() {
      //console.log("slide");
      const slider = this.$refs.slider;
      slider.scrollBy({
        left: -500,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.slider {
  overflow: hidden;
}
.arrow {
  cursor: pointer;
}
</style>
