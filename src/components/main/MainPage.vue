<template>
  <div>
    <HeaderMain />
    <MainComponent />
  </div>
</template>

<script>
import HeaderMain from "./HeaderMain.vue";
import MainComponent from "./MainComponent.vue";
export default {
  name: "MainPage",
  components: {
    HeaderMain,
    MainComponent,
  },
};
</script>

<style lang="scss" scoped></style>
