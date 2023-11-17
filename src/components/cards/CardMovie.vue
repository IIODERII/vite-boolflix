<template>
  <div class="col-lg-4 col-xl-3 col-6">
    <div class="overview" v-if="overview" @click.self="overview = false">
      <div class="w-50 rounded-4 position-relative">
        <div class="position-absolute go-back" @click="overview = false">
          <i class="fa-solid fa-arrow-left"></i>
        </div>
        <div class="container">
          <img
            :src="backdropPath()"
            :alt="titolo"
            class="w-100 d-block mx-auto"
            v-if="bigImage"
          />

          <h2>{{ titolo }}</h2>
          <h6 class="d-inline pe-2">Cast:</h6>
          <span v-for="actor in actors" class="badge me-1">{{ actor }}</span>
          <p class="pt-3">{{ trama }}</p>
          <div class="d-flex align-items-center pb-3">
            <span v-if="!store.languages.includes(language)">
              <span class="fw-bold">Lingua originale</span>:
              {{ language.toUpperCase() }}
            </span>
            <span v-else>
              <span class="fw-bold">Lingua originale</span>:
              <img :src="flagPath()" :alt="language" class="mx-2" />
            </span>
            <div class="d-flex align-items-center">
              <span class="fw-bold d-none d-sm-inline">Valutazione:</span>
              <div class="star d-inline-block w-auto">
                <div class="rating ps-2" :style="widthVotes()">
                  <span>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span class="fw-bold">Titolo originale</span>:
            {{ originalTitle }}
          </div>
        </div>
      </div>
    </div>
    <div class="flip-card" @click="callActorsMovies">
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
              <div class="star d-inline-block w-auto">
                <div class="rating ps-2" :style="widthVotes()">
                  <span>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>
                </div>
              </div>
            </div>
          </li>
          <li><span class="fw-bold">Trama</span>: {{ truncateTrama() }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../../store";
import axios from "axios";
export default {
  name: "CardMovie",
  props: {
    titolo: String,
    originalTitle: String,
    language: String,
    votes: Number,
    image: String,
    trama: String,
    bigImage: String,
    id: Number,
  },
  data() {
    return {
      store,
      overview: false,
      cardParams: {
        api_key: store.params.api_key,
      },
      actors: [],
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
    backdropPath() {
      if (this.bigImage) {
        return this.store.imagePath + this.bigImage;
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
    callActorsMovies() {
      this.actors = [];
      this.overview = true;
      const movieActors = `https://api.themoviedb.org/3/movie/${this.id}/credits`;
      axios.get(movieActors, { params: this.cardParams }).then((resp) => {
        console.log(resp.data.cast);
        for (let i = 0; i < 5; i++) {
          if (resp.data.cast[i]) {
            this.actors.push(resp.data.cast[i].name);
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

.flip-card {
  background-color: transparent;
  height: 100%;
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
    transform: rotateX(180deg);
  }
}

.overview {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);

  > div {
    background-color: $primaryColor;
    padding: 70px 50px;
    overflow-y: auto;
    z-index: -2;

    img {
      width: 2em;
    }

    .badge {
      background-color: $tertiaryColor;
    }

    .go-back {
      cursor: pointer;
      top: 15px;
      left: 20px;
      font-size: 2em;
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}

.star {
  width: auto;
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

@media screen and (max-width: 992px) {
  .overview {
    > div {
      width: 100% !important;
      height: 100vh;
    }
  }
}
</style>
