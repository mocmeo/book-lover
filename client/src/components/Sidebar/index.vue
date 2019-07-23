<template>
  <div class="inner">
    <!-- Search -->
    <search />

    <!-- Menu -->
    <book-menu />

    <!-- Top Books -->
    <top-books />

    <!-- Contact  -->
    <contact />

    <!-- Footer -->
    <footer id="footer">
      <p class="copyright">
        &copy; Untitled. All rights reserved. Demo Images:
        <a href="https://unsplash.com">Unsplash</a>. Design:
        <a href="https://html5up.net">HTML5 UP</a>.
      </p>
    </footer>
  </div>
</template>

<script>
import BookMenu from "./Menu";
import Search from "./Search";
import Contact from "./Contact";
import TopBooks from "./TopBooks";
export default {
  name: "Sidebar",
  components: {
    BookMenu,
    Search,
    Contact,
    TopBooks
  }
};
</script>

<style>
</style>
