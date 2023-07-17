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
  @apply rounded-lg hstack justify-center <sm:hidden;
}

.nav-link {
  @apply px-2;

  &--item {
    @apply font-sans font-bold text-brand-muted/75 relative md:text-lg;

    &:hover .active-line {
      @apply w-1/2;
    }
  }
}
</style>
