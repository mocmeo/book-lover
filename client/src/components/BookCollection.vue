<template>
  <section>
    <header class="major">
      <h2>Book Collections</h2>
    </header>
    <div class="posts">
      <book-item />
      <book-item />
      <book-item />
      <book-item />
      <book-item />
      <book-item />
    </div>
  </section>
</template>

<script>
import BookItem from "./BookItem";
export default {
  name: "BookCollection",
  components: {
    BookItem
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
