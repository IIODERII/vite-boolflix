<template>
  <div class="loading-wrapper">
    <h2 class="w-100 text-center display-2 fw-bold py-4">
      In cerca dei risultati della tua ricerca...
    </h2>
    <div class="orbit-spinner">
      <div class="orbit"></div>
      <div class="orbit"></div>
      <div class="orbit"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingComponent",
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

@keyframes orbit-spinner-orbit-one-animation {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}
@keyframes orbit-spinner-orbit-two-animation {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}
@keyframes orbit-spinner-orbit-three-animation {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}

.loading-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background-color: $secondaryColor;
  .orbit-spinner {
    box-sizing: border-box;
    height: 55px;
    width: 55px;
    border-radius: 50%;
    perspective: 800px;

    .orbit {
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      &:nth-child(1) {
        left: 0%;
        top: 0%;
        animation: orbit-spinner-orbit-one-animation 1200ms linear infinite;
        border-bottom: 3px solid $tertiaryColor;
      }
      &:nth-child(2) {
        right: 0%;
        top: 0%;
        animation: orbit-spinner-orbit-two-animation 1200ms linear infinite;
        border-right: 3px solid $tertiaryColor;
      }
      &:nth-child(3) {
        right: 0%;
        bottom: 0%;
        animation: orbit-spinner-orbit-three-animation 1200ms linear infinite;
        border-top: 3px solid $tertiaryColor;
      }
    }
  }
}
</style>
