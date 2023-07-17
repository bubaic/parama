<script setup lang="ts">
// import "assets/fonts/index.css";
// import "assets/style/global.scss";

import PrimaryNav from "@/components/nav/header.vue";
import SecondaryNav from "@/components/nav/footer.vue";
</script>

<template>
  <!-- navigation -->
  <PrimaryNav />

  <!-- main content -->
  <main><slot /></main>

  <!-- footer -->
  <SecondaryNav />
</template>
