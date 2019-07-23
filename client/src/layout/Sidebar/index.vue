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
    <sidebar-footer />
  </div>
</template>

<script>
import BookMenu from "./Menu";
import Search from "./Search";
import Contact from "./Contact";
import MobileApp from "./MobileApp";
import SidebarFooter from "./SidebarFooter";
export default {
  name: "Sidebar",
  components: {
    BookMenu,
    Search,
    Contact,
    MobileApp,
    SidebarFooter
  }
};
</script>

<style>
</style>
