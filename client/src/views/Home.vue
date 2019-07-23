<template>
  <div class="cover bg-primary section-bg">
    <page-header />
    <intro />
  </div>
</template>

<script>
import Intro from "@/components/Intro.vue";
import PageHeader from "@/components/Header.vue";
export default {
  name: "home",
  components: {
    Intro,
    PageHeader
  }
};
</script>
