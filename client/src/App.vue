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
import PageHeader from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import AppFeature from "@/components/Feature.vue";
import BookCollection from "@/components/BookCollection.vue";
import Sidebar from "@/components/Sidebar";
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
