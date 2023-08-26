<script setup lang="ts">
import { LinkTytpe } from "~/types";

const { links } = defineProps({ links: Array<LinkTytpe> });
</script>

<template>
  <ul class="desktop-only-menu">
    <li class="nav-link" v-for="link in links">
      <NuxtLink :to="link.path" class="nav-link--item">
        {{ link.value }}

        <span class="active-line"></span>
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.desktop-only-menu {
  @apply hstack justify-center <sm:hidden;
}

.active-line {
  @apply bg-brand-accent rounded-lg h-0.75 transition-all ease-out w-0
    duration-200 block pointer-events-none left-0.5 relative;
}

.nav-link {
  @apply px-2;

  &--item {
    @apply font-sans font-bold text-brand-muted/75 relative md:text-lg;

    &:hover > .active-line,
    &.router-link-exact-active > .active-line {
      @apply w-1/2 pointer-events-none;
    }

    &.router-link-exact-active > .active-line {
      @apply bg-brand-muted/60;
    }
  }
}
</style>
