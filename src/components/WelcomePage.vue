<template>
  <div
    class="vh-100 d-flex flex-column justify-content-center align-items-center"
  >
    <h1
      class="w-100 text-center display-2 fw-bold py-4 text-uppercase"
      :style="animate"
    >
      BoolFlix
    </h1>
    <button class="btn text-uppercase" @click="store.page = 'main'">
      inizia
    </button>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "WelcomePage",
  data() {
    return {
      store,
      animate: "",
    };
  },
  created() {
    setTimeout(() => {
      this.animate = "transform: scale(1)";
    }, 500);
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

div {
  background-color: $secondaryColor;
  overflow: hidden;

  h1 {
    color: $tertiaryColor;
    font-size: 10em;
    transform: scale(120);
    transition: all 1.8s ease;
  }

  button {
    background-color: $tertiaryColor;
    color: $whiteColor;
    font-size: 2em;

    &:hover {
      background-color: $tertiaryHover;
      color: $whiteColor;
    }
  }
}
</style>
