<template>
  <article>
    <a href="#" class="image">
      <img src="@/assets/images/pic01.jpg" alt />
    </a>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
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
  components: {},
  data() {
    return {
      title: "The Hunger Games",
      description:
        "The Hunger Games is a 2012 American dystopian science fiction-adventure film directed by Gary Ross and based on Suzanne Collins's 2008 novel of the same"
    };
  }
};
</script>

<style>
</style>
