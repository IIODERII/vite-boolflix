<template>
  <div
    class="vh-100 d-flex flex-column justify-content-center align-items-center"
  >
    <button
      class="text-white text-center z-1 btn btn-light"
      v-if="message"
      @click.once="start(), (message = false)"
    >
      Iniziamo!
    </button>

    <h1
      class="w-100 text-center display-2 fw-bold py-4 text-uppercase"
      :style="animate"
    >
      BoolFlix
    </h1>
    <button class="btn text-uppercase" @click="store.page = 'users'">
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
      audio: new Audio("/sounds/introSound.mp3"),
      message: true,
    };
  },
  methods: {
    start() {
      setTimeout(() => {
        this.animate = "transform: scale(1)";
      }, 500);
      this.audio.play();
    },
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
    transition: all 2.3s ease;
    cursor: default;
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
