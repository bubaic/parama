<template>
  <div>
    Some default layout shared across all pages
    <slot />
  </div>
</template>

<style lang="scss" scoped>
body {
  @apply bg-brand-secondary overflow-x-hidden;
}
</style>
