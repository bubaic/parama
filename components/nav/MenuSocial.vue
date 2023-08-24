<template>
  <div class="social-icons">
    <a href="https://www.facebook.com/ParamaExclusiveSalon"><IconFb /></a>
    <a href="#"><IconIg /></a>
    <!-- <a href="#"><IconTw /></a> -->
    <a href="https://www.youtube.com/@ParamaLadiesBeautyParlour"><IconYt /></a>
  </div>
</template>

<style scoped lang="scss">
.social-icons {
  @apply bg-transparent gap-2 hstack sm:hidden md:flex;
}
a {
  transition: all 200ms ease-out;
  @apply bg-brand-primary rounded-full p-2 hstack h-9 w-9 sm:h-7 sm:w-7
    sm:p-1.5 lg:h-10 lg:w-10;
}
</style>
