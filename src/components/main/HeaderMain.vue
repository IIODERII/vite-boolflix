<template>
  <div class="d-flex justify-content-between align-items-center">
    <h1 class="p-3 text-uppercase">Boolflix</h1>

    <div class="d-flex align-items-center right-side">
      <div
        class="p-4 position-relative fs-5 to-search"
        @click="store.page = 'search'"
      >
        <i class="fa-solid fa-magnifying-glass"></i>
        <strong class="ps-2">Cerca</strong>
      </div>
      <div class="user" @click="changeUsers">
        <h6 class="d-inline-block mx-3 text-break">
          {{ longName() }}
        </h6>
        <img
          :src="store.currentUser.userImage"
          :alt="store.currentUser.userName"
          class="w-25 me-2"
        />
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
  methods: {
    longName() {
      if (this.store.currentUser.userName.length > 7) {
        return this.store.currentUser.userName.slice(0, 7) + "...";
      } else {
        return this.store.currentUser.userName;
      }
    },

    changeUsers() {
      this.store.page = "users";
      this.store.users.forEach((user) => {
        if (
          user.userName === this.store.currentUser.userName &&
          user.userImage === this.store.currentUser.userImage
        ) {
          user = this.store.currentUser;
        }
      });
    },
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
    width: 200px;
    text-align: center;
    margin: 0 20px;

    &:hover {
      transform: scale(1.1);
    }

    h6 {
      font-size: 1.5em;
    }
  }
}

@media screen and (max-width: 460px) {
  h1 {
    display: none;
  }
  .right-side {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
