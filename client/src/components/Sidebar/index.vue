<template>
  <div class="inner">
    <!-- Search -->
    <search />

    <!-- Menu -->
    <book-menu />

    <!-- Mobile Apps -->
    <mobile-app />

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
import MobileApp from "./MobileApp";
export default {
  name: "Sidebar",
  components: {
    BookMenu,
    Search,
    Contact,
    MobileApp
  }
};
</script>

<style>
</style>
