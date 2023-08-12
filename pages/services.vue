<script setup lang="ts">
import { IconGo } from "@/components/icon";
import { useStore } from "@/composables/store";

const lists = [
  "Nail arts & polish",
  "hair cutting & dressing",
  "Spa & massage",
  "Hair treatments & Coloring",
  "Bridal makeover",
  "Bridal makeover",
  "Bridal makeover",
  "Bridal makeover",
  "Bridal makeover",
  "Bridal makeover",
  "Bridal makeover",
];

const { defaultSiteTitle } = useStore();
useSeoMeta({ title: `Services we offer ${defaultSiteTitle}` });
</script>

<template>
  <div class="page">
    <h1>What we can offer you</h1>
    <section class="cards">
      <div v-for="item in lists" class="card">
        <div class="card__img"></div>
        <div class="card--content">
          <div class="card__text">{{ item }}</div>
          <div class="icon-wrapper"><IconGo class="w-5" /></div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/style/_utils";

.page {
  @apply container mx-auto xl:max-w-[1510px];

  h1 {
    @apply px-4 mt-2 text-3xl sm:hidden;
  }
}

.cards {
  @apply my-5 w-full grid p-4 gap-6 grid-cols-2 justify-items-center
    items-start sm:gap-0 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6
    xl:gap-12;
}

.card {
  transition: all 200ms ease-out;
  @apply vstack sm:mb-6 gap-3 sm:gap-4 cursor-pointer;

  &__img {
    transition: filter 200ms ease, background-color 300ms ease-out;
    @extend %gradient-white;
    @apply border rounded-xl to-[#ECE2DF] border-brand-accent/80
      h-40 w-40 sm:h-50 sm:w-50;
  }

  &:hover,
  &:focus {
    .card__img {
      @extend %gradient-royal-white, %drop-shadow;
    }
  }

  &--content {
    @apply w-full hstack justify-between sm:max-w-50;
  }

  &__text {
    @apply text-sm sm:text-base sm:leading-tight max-w-30;
  }
}

.icon-wrapper {
  @apply rounded-md;
  @extend %gradient-white;
}
</style>
