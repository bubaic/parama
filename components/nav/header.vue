<script setup lang="ts">
import { LinkTytpe } from "~/types";
import { IconArrowUp } from "@/components/icon";
import MenuMobile from "./MenuMobile.vue";
import MenuDesktop from "./MenuDesktop.vue";
import MenuSocial from "./MenuSocial.vue";

let isHidden = ref(true);

const links: Array<LinkTytpe> = [
  { path: "/", value: "home" },
  { path: "/services", value: "services" },
  { path: "/gallery", value: "gallery" },
  { path: "/about", value: "about" },
  { path: "/contact", value: "contact" },
];

const toggleNavItem = () => (isHidden.value = !isHidden.value);
</script>

<template>
  <header>
    <nav
      :style="[
        isHidden
          ? '--tw-bg-opacity: 0.2; --tw-backdrop-blur: blur(16px)'
          : '--tw-bg-opacity: 0.35; --tw-backdrop-blur: blur(6px)',
      ]"
    >
      <NuxtLink to="/" class="logo">
        <img src="/logo.svg" alt="brand" class="logo__full" />
        <img src="/logo-small.svg" alt="brand" class="logo__sm" />
      </NuxtLink>

      <MenuDesktop :links="links" />

      <MenuSocial class="social-menu" />

      <ClientOnly>
        <MenuMobile
          :links="links"
          :is-hidden="isHidden"
          @toggle-nav-item="toggleNavItem"
        />
      </ClientOnly>

      <button class="mob-only" @click="toggleNavItem">
        <IconArrowUp :class="{ rotated: isHidden }" />
      </button>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  @apply w-full p-6 bottom-0 z-1000 vstack fixed
    sm:mb-8 sm:relative;
}

nav {
  @apply rounded-lg border-brand-accent/25 w-full
    shadow-brand-secondary-alt/15 hstack justify-between
    backdrop-blur-sm backdrop-filter <sm:border <sm:bg-brand-accent/0
    <sm:shadow-xl <md:py-2 <md:px-4 lg:max-w-screen-lg xl:max-w-[1510px];
}

.logo {
  @apply w-max;

  &__full {
    transition: all 200ms ease-out;
    @apply w-45 hidden sm:block lg:w-55;
  }
  &__sm {
    @apply w-15 sm:hidden;
  }
}

.mob-only {
  @apply bg-brand-background rounded-full h-10 p-1 w-10 sm:hidden;

  .rotated {
    @apply rotate-0 duration-300;
  }
  svg {
    @apply transform rotate-180 duration-300;
  }
}

/*  */
.nav-link > a.router-link-exact-active,
a.router-link-exact-active:not(.logo) {
  @apply border border-brand-accent/30 text-brand-background
    backdrop-blur backdrop-filter sm:border-0
    sm:text-brand-accent <sm:bg-brand-accent;

  & .active-line {
    @apply w-1/2;
  }
}
.active-line {
  transition: width 200ms ease-out;

  @apply bg-brand-accent rounded-full h-[3px] -bottom-2 left-0
      w-0 hidden absolute sm:block;
}
</style>
