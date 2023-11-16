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
      <CardComponent
        v-for="item in items"
        :titolo="item.title"
        :originalTitle="item.original_title"
        :language="item.original_language"
        :votes="item.vote_average"
        :trama="item.overview"
        :image="item.poster_path"
        class="card-slide px-1"
      />
    </div>
  </div>
</template>

<script>
import CardComponent from "../cards/CardComponent.vue";

export default {
  name: "SliderMovie",
  components: {
    CardComponent,
  },
  props: {
    items: Array,
  },
  methods: {
    scrollRight() {
      console.log("slide");
      const slider = this.$refs.slider;
      slider.scrollBy({
        left: 744,
        behavior: "smooth",
      });
    },
    scrollLeft() {
      console.log("slide");
      const slider = this.$refs.slider;
      slider.scrollBy({
        left: -744,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.slider {
  overflow: hidden;
  .card-slide {
    width: 20.001%;
  }
}
</style>
