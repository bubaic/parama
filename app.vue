<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 250ms ease-out;
}
.page-leave-to,
.page-enter-from {
  opacity: 0;
  filter: blur(4px);
  transform: translateY(0.25rem);
}
</style>
