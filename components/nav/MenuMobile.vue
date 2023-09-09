<script setup lang="ts">
import { LinkTytpe } from "~/types";
import { gsap } from "gsap";

const { links, isHidden } = defineProps({
  links: Array<LinkTytpe>,
  isHidden: { default: true, type: Boolean },
});

const emits = defineEmits(["toggleNavItem"]);

function onListEnter(el: Element, done: () => void) {
  gsap.from(el, { opacity: 0, transform: "translateX(100%)" });
  gsap.to(el, {
    opacity: 1,
    transform: "translateX(0)",
    delay: el.dataset.index * 0.05,
    ease: "elastic.out(1, 0.5)",
    duration: 1.25,
    onComplete: done,
  });
}
</script>

<template>
  <div class="mobile-only-menu" :class="isHidden ? 'hidden' : 'flex'">
    <transition-group tag="ul" @enter="onListEnter">
      <li
        class="nav-link"
        v-for="(link, idx) in links"
        :data-index="idx"
        :key="idx"
        v-if="!isHidden"
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
  @apply bg-gradient-to-t h-screen from-brand-muted/60 w-screen
    -right-6 -bottom-6.5 absolute items-end sm:hidden;
}
ul {
  @apply flex-col-reverse mx-4 mb-28 w-full py-4 gap-8 right-2
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
</style>
