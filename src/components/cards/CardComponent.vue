<template>
  <div class="col-3">
    <img :src="store.imagePath + image" :alt="titolo" class="d-block w-100" />
    <ul>
      <li><span class="fw-bold">Title</span>: {{ titolo }}</li>
      <li>
        <span class="fw-bold">Original title</span>:
        {{ originalTitle }}
      </li>
      <li><span class="fw-bold">Language</span>: {{ language }}</li>
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
  computed: {},
};
</script>

<style lang="scss" scoped>
img {
  height: 455px;
}
</style>
