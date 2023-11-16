<template>
  <div class="col-6 col-lg-4 col-xl-3 flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="posterPath()" :alt="titolo" class="d-block w-100" />
      </div>
      <ul class="flip-card-back list-unstyled text-start p-3 overflow-y-auto">
        <li><span class="fw-bold">Titolo</span>: {{ titolo }}</li>
        <li>
          <span class="fw-bold">Titolo originale</span>:
          {{ originalTitle }}
        </li>
        <li v-if="!store.languages.includes(language)">
          <span class="fw-bold">Lingua originale</span>: {{ language }}
        </li>
        <li v-else>
          <span class="fw-bold">Lingua originale</span>:
          <img :src="flagPath()" :alt="language" class="mx-2" />
        </li>
        <li>
          <span class="fw-bold d-none d-sm-inline">Valutazione:</span>

          <i
            class="fa-solid fa-star"
            style="color: #d4e123"
            v-for="n in Math.round(votes / 2)"
          ></i>
          <i
            class="fa-regular fa-star"
            style="color: #d4e123"
            v-for="n in 5 - Math.round(votes / 2)"
          ></i>
        </li>
        <li><span class="fw-bold">Trama</span>: {{ truncateTrama() }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { store } from "../../store";
export default {
  name: "CardComponent",
  props: {
    titolo: String,
    originalTitle: String,
    language: String,
    votes: Number,
    image: String,
    trama: String,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    flagPath() {
      if (store.languages.includes(this.language)) {
        return `/images/${this.language}.svg`;
      }
    },

    posterPath() {
      if (this.image) {
        return this.store.imagePath + this.image;
      } else {
        return "public/images/default_poster.jpg";
      }
    },

    truncateTrama() {
      if (this.trama.length <= 350) {
        return this.trama;
      } else {
        return this.trama.slice(0, 350) + "...";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

.flip-card {
  background-color: transparent;
  perspective: 1000px;
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    .flip-card-front,
    .flip-card-back {
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }

    .flip-card-front {
      background-color: $primaryColor;
      img {
        height: 100%;
      }
    }

    .flip-card-back {
      background-color: $primaryColor;
      transform: rotateY(180deg);
      border: 1px solid $whiteColor;
      position: fixed;
      top: 0;
      li {
        img {
          width: 2em;
        }
      }
    }
  }
  &:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
}

// @media screen and (max-width: 1400px) and (min-width: 1200px) {
//   .flip-card {
//     height: 380px;
//   }
// }
</style>
