<template>
  <section>
    <header class="major">
      <h2>Book Collections</h2>
    </header>
    <div class="posts">
      <book-item v-for="book in books" :key="book.id" :book="book" />
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import BookItem from "./BookItem";
export default {
  name: "BookCollection",
  components: {
    BookItem
  },
  computed: {
    ...mapGetters(["books"])
  },
  beforeCreate() {
    this.$store.dispatch("fetchBookList");
  }
};
</script>

<style>
</style>
