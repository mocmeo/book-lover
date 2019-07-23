<template>
  <!-- <div id="app" class="wrapper mx-auto h-100">
    <router-view />
  </div>-->

  <div id="wrapper">
    <!-- Main -->
    <div id="main">
      <div class="inner">
        <page-header />
        <banner />
        <app-feature />
        <book-collection />
      </div>
    </div>

    <!-- Sidebar -->
    <div id="sidebar">
      <sidebar />
    </div>
  </div>
</template>

<script>
import PageHeader from "@/layout/Header.vue";
import Banner from "@/layout/Banner.vue";
import AppFeature from "@/layout/Feature.vue";
import BookCollection from "@/components/Books/BookCollection";
import Sidebar from "@/layout/Sidebar";
export default {
  name: "App",
  components: {
    PageHeader,
    Banner,
    AppFeature,
    BookCollection,
    Sidebar
  },
  beforeCreate() {
    this.$store.dispatch("fetchBookList");
  }
};
</script>
