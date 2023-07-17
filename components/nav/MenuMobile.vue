<script setup lang="ts">
import { LinkTytpe } from "~/types";

const { links, isHidden } = defineProps({
  links: Array<LinkTytpe>,
  isHidden: { default: true, type: Boolean },
});

</script>

<template>
  <TransitionGroup tag="ul" class="mobile-only-menu" name="list">
    <li
      class="nav-link"
      v-for="(link, idx) in links"
      :data-index="idx"
      :key="idx"
    >
      <NuxtLink :to="link.path" class="nav-link__item">
        {{ link.value }}
      </NuxtLink>
    </li>
  </TransitionGroup>
</template>

<style scoped lang="scss">
.mobile-only-menu {
  @apply rounded-lg flex-col-reverse right-0 bottom-25 gap-8 vstack
    items-end absolute;
}

.nav-link {
  @apply shadow-xl;

  &__item {
    @apply bg-white rounded shadow-md py-2.5
      px-3;
  }
}

.nav-link > a.router-link-exact-active,
a.router-link-exact-active:not(.logo) {
  @apply bg-brand-accent border border-brand-accent/30
  text-brand-background font-semibold;
}

/*  */

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
  transition-delay: 100ms;
}
.list-enter-from,
.list-leave-to {
  transform: translateY(30px);
}
</style>
