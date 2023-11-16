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
          <span class="fw-bold">Lingua originale</span>:
          {{ language.toUpperCase() }}
        </li>
        <li v-else>
          <span class="fw-bold">Lingua originale</span>:
          <img :src="flagPath()" :alt="language" class="mx-2" />
        </li>
        <li>
          <div class="d-flex align-items-center">
            <span class="fw-bold d-none d-sm-inline">Valutazione:</span>
            <span> {{ votes }}</span>
            <div class="star d-inline-block w-auto">
              <div class="rating" :style="widthVotes()">
                <span>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>
              </div>
            </div>
          </div>
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
      if (this.trama.length <= 340) {
        return this.trama;
      } else {
        return this.trama.slice(0, 340) + "...";
      }
    },
    widthVotes() {
      return "width: " + this.votes * 10 + "%";
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
    cursor: pointer;

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
      transform: rotateX(180deg);
      border: 1px solid $whiteColor;
      position: fixed;
      top: 0;
      li {
        img {
          width: 2em;
        }
        .star {
          width: 150px;
          position: relative;
          color: #bdbdbd;
        }

        .rating {
          overflow: hidden;
          white-space: nowrap;

          span {
            font-size: 30px;
            white-space: nowrap;
            overflow: hidden;
            color: gold;

            &:before {
              content: "\2606\2606\2606\2606\2606";
              position: absolute;
              color: #bdbdbd;
              z-index: -1;
            }
          }
        }
      }
    }
  }

  &:hover .flip-card-inner {
    transform: rotateX(180deg);
  }
}
</style>
