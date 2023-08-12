<script setup lang="ts">
import { useStore } from "@/composables/store";

const { openingStats } = useStore(),
  links = [
    { path: "/privacy", value: "privacy" },
    { path: "/terms", value: "terms" },
  ];
</script>

<template>
  <footer>
    <nav>
      <div class="store-opening">
        <div class="store-opening__days">
          <b>Opens: </b>
          <span>
            {{ openingStats.days.from }} &dash; {{ openingStats.days.to }}
          </span>
        </div>

        <div class="store-opening__hours">
          {{ openingStats.time.from }} &dash; {{ openingStats.time.to }}
        </div>
      </div>

      <ul class="links">
        <li class="nav-link" v-for="link in links">
          <NuxtLink :to="link.path" class="nav-link--item">
            {{ link.value }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped lang="scss">
footer {
  @apply mx-auto w-full pb-30 sm:pb-8;
}

nav {
  @apply mx-auto w-full vstack justify-between my-auto sm:hstack
    px-4 lg:max-w-screen-lg xl:max-w-[1510px];
}

.store-opening {
  @apply vstack sm:hstack <sm:pb-2 sm:gap-3 font-sans;

  &__days,
  &__hours {
    @apply capitalize text-brand-muted/80;

    span {
      @apply text-brand-accent;
    }
  }
}

.social-icons {
  @apply h-20 w-20 hidden xl:hstack;
}
.links {
  @apply flex-shrink hstack justify-end divide-x divide-brand-muted/25;
}
.nav-link {
  @apply px-2;

  &--item {
    @apply font-sans font-bold text-brand-muted/75 relative;

    &:hover {
      @apply underline underline-offset-4;
    }
  }
}
a.router-link-exact-active {
  @apply text-brand-accent;
}
</style>
