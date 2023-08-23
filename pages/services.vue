<script setup lang="ts">
import { IconGo } from "@/components/icon";
import { useStore } from "@/composables/store";

const { serviceList } = useStore();

const { defaultSiteTitle } = useStore();
useSeoMeta({ title: `Services we offer ${defaultSiteTitle}` });
</script>

<template>
  <div class="page">
    <h1>What we can offer you</h1>

    <section class="cards">
      <button @click="" v-for="item in serviceList" class="card">
        <div class="card__img">
          <img
            class="h-full w-full"
            :src="item.imgSrc"
            :alt="'image of ' + item.name"
          />
        </div>

        <span class="card--content">
          <div class="card__text">{{ item.name }}</div>
          <div class="icon-wrapper">
            <IconGo class="icon" />
          </div>
        </span>
      </button>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/style/mixins";

.page {
  @apply container mx-auto xl:max-w-[1510px];

  h1 {
    @include visually-hidden;
  }
}

.cards {
  @apply mt-2 mb-5 w-full grid gap-6 grid-cols-2 justify-items-center
    items-start sm:gap-0 sm:grid-cols-3 <sm:px-4 lg:grid-cols-4
    xl:gap-12 xl:grid-cols-6;
}

.card {
  transition: all 250ms ease-out;
  @apply outline-none gap-2 vstack sm:mb-6 sm:gap-4;

  &__img {
    @apply bg-platinum border border-brand-background rounded-xl h-40
      p-5 transition-all ease-out w-40 duration-200 filter
      drop-shadow-large vstack sm:h-50 sm:p-10 sm:w-50;
  }

  &:hover,
  &:focus {
    .card__img {
      @apply bg-lavendar-alabaster border-brand-accent drop-shadow-small;
    }

    .icon {
      @apply bg-brand-accent fill-brand-background p-0.75;

      & {
        @apply rounded-full;
      }
    }
  }

  &--content {
    @apply cursor-pointer w-full px-1 gap-2 hstack items-start
      justify-between sm:max-w-50;
  }

  &__text {
    @apply text-sm text-brand-secondary-alt text-left leading-tight
      lowercase sm:text-base sm:leading-[1.15] first-letter:capitalize
      pl-1;
  }
}

.icon {
  @apply h-5 fill-brand-secondary-alt w-5;
}
</style>
