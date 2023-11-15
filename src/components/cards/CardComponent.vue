<template>
  <div class="col-3 flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img
          :src="store.imagePath + image"
          :alt="titolo"
          class="d-block w-100"
        />
      </div>
      <ul class="flip-card-back list-unstyled text-start p-3 overflow-y-auto">
        <li><span class="fw-bold">Title</span>: {{ titolo }}</li>
        <li>
          <span class="fw-bold">Original title</span>:
          {{ originalTitle }}
        </li>
        <li v-if="!(language in store.languages)">
          <span class="fw-bold">Language</span>: {{ language }}
        </li>
        <li v-else>
          <span class="fw-bold">Language</span>:
          <img :src="flagPath()" :alt="language" class="mx-2" />
        </li>
        <li>
          <span class="fw-bold">Votes</span>:

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
        <li><span class="fw-bold">Trama</span>: {{ trama }}</li>
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
      if (this.language === "en") {
        return store.languages.en;
      } else if (this.language === "it") {
        return store.languages.it;
      } else if (this.language === "pt") {
        return store.languages.pt;
      } else if (this.language === "fr") {
        return store.languages.fr;
      } else if (this.language === "de") {
        return store.languages.de;
      } else if (this.language === "es") {
        return store.languages.es;
      } else if (this.language === "ru") {
        return store.languages.ru;
      } else if (this.language === "uz") {
        return store.languages.uz;
      } else if (this.language === "ja") {
        return store.languages.ja;
      } else if (this.language === "hi") {
        return store.languages.hi;
      } else if (this.language === "ml") {
        return store.languages.ml;
      } else if (this.language === "zh") {
        return store.languages.zh;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.flip-card {
  height: 455px;
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
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }

    .flip-card-front {
      background-color: #000;
      img {
        height: 100%;
      }
    }

    .flip-card-back {
      background-color: #000;
      transform: rotateY(180deg);
      border: 1px solid #fff;

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
</style>
