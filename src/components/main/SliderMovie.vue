<template>
  <div>
    <div class="d-flex justify-content-end fs-1 px-3">
      <div @click="scrollLeft" class="px-3 arrow">
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div @click="scrollRight" class="px-3 arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
    <div class="row flex-nowrap slider" :ref="'slider'">
      <CardMovie
        class="card-slide px-1"
        v-for="item in items"
        :titolo="item.title"
        :originalTitle="item.original_title"
        :language="item.original_language"
        :votes="item.vote_average"
        :trama="item.overview"
        :image="item.poster_path"
        :bigImage="item.backdrop_path"
        :id="item.id"
        :movie="item"
      />
    </div>
  </div>
</template>

<script>
import CardMovie from "../cards/CardMovie.vue";

export default {
  name: "SliderMovie",
  components: {
    CardMovie,
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

  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
