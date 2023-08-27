<script setup lang="ts">
// import "assets/fonts/index.css";
// import "assets/style/global.scss";

import PrimaryNav from "@/components/nav/header.vue";
import SecondaryNav from "@/components/nav/footer.vue";
</script>

<template>
  <div class="body-wrapper">
    <!-- navigation -->
    <PrimaryNav />

    <!-- main content -->
    <main><slot /></main>

    <!-- footer -->
    <SecondaryNav />
  </div>
</template>

<style scoped lang="scss">
.body-wrapper {
  @apply vstack;
}

main {
  @apply min-h-[calc(100vh-17rem)] w-full vstack justify-center;
}
</style>
