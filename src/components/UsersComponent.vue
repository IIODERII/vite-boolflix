<template>
  <div class="users text-white text-center">
    <div class="add-user" v-if="addUser" @click.self="addUser = false">
      <div>
        <h3 class="pb-5 display-4 fw-bold">Chi sarà il nostro nuovo utente?</h3>
        <input
          type="text"
          id="usnm"
          name="usnm"
          placeholder="Inserisci qui il nuovo nome"
          v-model="newName"
          class="form-control w-50 mx-auto"
          @keyup.enter="createNewUser()"
        />
        <div>
          <h3 class="py-3 fw-bold">Scegli il tuo avatar</h3>
          <img
            v-for="(avatar, index) in store.avatarArray"
            :src="avatar"
            :alt="'avatar' + index"
            ref="avatars"
            @click="selectAvatar(index)"
          />
        </div>
        <button class="btn mt-4" @click="createNewUser()">Crea</button>
      </div>
    </div>
    <div class="container">
      <h1>Chi sta guardando Boolflix?</h1>

      <div
        class="row h-100 justify-content-start align-content-start align-items-start"
      >
        <div class="col-3" v-for="user in store.users" @click="goToUser(user)">
          <img
            :src="user.userImage"
            :alt="user.userName"
            class="w-100 rounded-5"
          />
          <h3 class="fs-1 py-2 text-break">{{ user.userName }}</h3>
        </div>
        <div class="col-3" @click="addUser = true">
          <i class="fa-solid fa-square-plus"></i>
          <h3 class="fs-1 py-2">Nuovo utente</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "UsersComponent",
  data() {
    return {
      store,
      addUser: false,
      newName: "",
      selectedAvatar: "",
    };
  },
  methods: {
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    createNewUser() {
      if (this.newName.trim() && this.selectedAvatar) {
        const user = {
          userImage: this.selectedAvatar,
          userName: this.newName,
        };
        store.users.push(user);
        this.addUser = false;
        this.newName = "";
      }
    },
    goToUser(user) {
      this.store.currentUser = user;
      this.store.page = "home";
    },

    longName() {
      if (name.length > 10) {
        return name.slice(0, 10) + "...";
      }
    },

    selectAvatar(i) {
      const currentPic = this.$refs.avatars;

      currentPic.forEach((value) => {
        value.classList.remove("active");
      });
      currentPic[i].classList.add("active");
      this.selectedAvatar = currentPic[i].src;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
.users {
  background-color: $secondaryColor;
  min-height: 100vh;

  h1 {
    color: $tertiaryColor;
    font-size: 4em;
    font-weight: bold;
    padding: 100px 0;
  }
  .col-3 {
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
  i {
    font-size: 19em;
  }

  .add-user {
    z-index: 100;
    > div {
      background-color: $primaryColor;

      padding: 50px;
      border-radius: 50px;
      h3 {
        color: $tertiaryColor;
      }

      img {
        width: 100px;
        height: 100px;
        margin: 10px;
      }

      .active {
        border: 5px solid $whiteColor;
        box-sizing: content-box;
      }
    }
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba($color: #000000, $alpha: 0.65);

    button {
      background-color: $tertiaryColor;
      font-weight: bold;
      transition: all 0.3s ease;

      &:hover {
        color: $whiteColor;
        background-color: $tertiaryHover;
      }
    }
  }
}
</style>
