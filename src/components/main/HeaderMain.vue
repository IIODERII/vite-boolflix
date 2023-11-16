<template>
  <div class="d-flex justify-content-between align-items-center">
    <h1 class="p-3 text-uppercase">Boolflix</h1>

    <div class="d-flex align-items-center">
      <div
        class="p-4 position-relative fs-5 to-search"
        @click="store.page = 'search'"
      >
        <i class="fa-solid fa-magnifying-glass"></i>
        <strong class="ps-2">Cerca</strong>
      </div>
      <div class="user" @click="store.page = 'users'">
        <img
          :src="store.currentUser.userImage"
          :alt="store.currentUser.userName"
          class="w-100"
        />
        <h6>{{ store.currentUser.userName }}</h6>
      </div>
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

  h1 {
    cursor: pointer;
  }

  .to-search {
    cursor: pointer;
    transition: all 0.3s ease;
    color: $whiteColor;

    &:hover {
      background-color: $secondaryColor;
      color: $tertiaryColor;
    }
  }

  .user {
    cursor: pointer;
    transition: all 0.3s ease;
    width: 45px;
    text-align: center;
    margin: 0 20px;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
