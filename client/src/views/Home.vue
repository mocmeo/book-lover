<template>
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
  name: "home",
  components: {
    PageHeader,
    Banner,
    AppFeature,
    BookCollection,
    Sidebar
  }
};
</script>
