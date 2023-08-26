<script setup lang="ts">
import { LinkTytpe } from "~/types";

const { links, isHidden } = defineProps({
  links: Array<LinkTytpe>,
  isHidden: { default: true, type: Boolean },
});

const emits = defineEmits(["toggleNavItem"]);
</script>

<template>
  <div class="mobile-only-menu" v-if="!isHidden">
    <transition-group tag="ul" name="list">
      <li
        class="nav-link"
        v-for="(link, idx) in links"
        :data-index="idx"
        :key="idx"
      >
        <NuxtLink
          :to="link.path"
          class="nav-link__item"
          @click="emits('toggleNavItem', (isHidden = !isHidden))"
        >
          {{ link.value }}
        </NuxtLink>
      </li>
    </transition-group>
  </div>
</template>

<style scoped lang="scss">
.mobile-only-menu {
  z-index: -1;
  @apply bg-gradient-to-t flex h-screen from-brand-muted/60 w-screen -right-4.25
    -bottom-6.5 absolute items-end sm:hidden;
}
ul {
  @apply flex-col-reverse mx-4 mb-28 w-full py-4 gap-8
    vstack items-end relative;
}
.nav-link {
  @apply shadow-xl;

  &__item {
    @apply bg-lavender-bone-right rounded shadow-md py-2.5 px-3;
  }
}

.nav-link > a.router-link-exact-active,
a.router-link-exact-active:not(.logo) {
  @apply bg-brand-accent bg-none border font-bold
  border-brand-accent/30 text-brand-background;
}

/*  */
.list-enter-active,
.list-leave-active {
  transition: transform 0.5s ease;
  transition-delay: 100ms;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
