<template>
  <div class="col-3">
    <img :src="store.imagePath + image" :alt="titolo" class="d-block w-100" />
    <ul>
      <li><span class="fw-bold">Title</span>: {{ titolo }}</li>
      <li>
        <span class="fw-bold">Original title</span>:
        {{ originalTitle }}
      </li>
      <li v-if="!(language in store.languages)">
        <span class="fw-bold">Language</span>: {{ language }}
      </li>
      <li v-else><img :src="flagPath()" :alt="language" /></li>
      <li><span class="fw-bold">Vote</span>: {{ votes }}</li>
    </ul>
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
img {
  height: 455px;
}

li {
  img {
    width: 2em;
    height: auto;
  }
}
</style>
