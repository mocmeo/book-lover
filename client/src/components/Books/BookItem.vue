<template>
  <article>
    <a href="#" class="image">
      <img class="cover" :src="book.imageUrl" />
    </a>
    <h3>{{ book.title }}</h3>
    <p>
      {{ book.description.length > 200
      ? `${book.description.substr(0,200)}...`
      : book.description }}
    </p>
    <ul class="actions">
      <li>
        <a href="#" class="button">More</a>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: "BookItem",
  props: ["book"]
};
</script>

<style>
.cover {
  object-fit: cover;
  width: auto;
  height: 500px;
}
</style>
