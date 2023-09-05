<script setup lang="ts">
import { IconGo } from "@/components/icon";
import { useStore } from "@/composables/store";
import { useUtils } from "@/composables/utils";

const { serviceList } = useStore(),
  { useMedia } = useUtils();

const isModalOpen = ref(false),
  { media } = useMedia(serviceList);

const { defaultSiteTitle } = useStore();
useSeoMeta({ title: `Services we offer ${defaultSiteTitle}` });
</script>

<template>
  <div class="page">
    <h1>What we can offer you</h1>

    <section class="cards">
      <button
        @click="isModalOpen = !isModalOpen"
        v-for="item in serviceList"
        class="card"
      >
        <div class="card__img">
          <img
            class="h-full w-full"
            :src="item.src"
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

    <Modal :is-modal-open="isModalOpen" :mediaItem="media.currItem" />
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/style/mixins";

.page {
  @apply mx-auto w-full xl:max-w-screen-xl 2xl:max-w-[1510px];

  h1 {
    @include visually-hidden;
  }
}

.cards {
  @apply <sm:mt-3 mb-5 grid gap-6 grid-cols-2 justify-start
    items-start sm:grid-cols-3 lg:grid-cols-4 xl:mx-2 xl:grid-cols-6
    2xl:m-0;
}

.card {
  transition: all 250ms ease-out;
  @apply outline-none gap-2 vstack sm:mb-3 sm:gap-4;

  &__img {
    transition: all 200ms ease-out;
    @apply bg-platinum border border-brand-background rounded-xl 
      h-40 p-5 w-40 filter drop-shadow-large vstack
      <tiny:h-32 <tiny:w-32 sm:h-50 sm:p-10 sm:w-50 xl:h-40 xl:w-40;
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
    @apply cursor-pointer w-full max-w-40 gap-2 hstack items-start
      justify-between <tiny:max-w-32 sm:max-w-50 xl:max-w-40;
  }

  &__text {
    @apply text-sm text-brand-secondary-alt text-left leading-tight
      pl-1 lowercase sm:text-base sm:leading-[1.15]
      first-letter:capitalize;
  }
}

.icon {
  @apply h-5 fill-brand-secondary-alt w-5;
}
</style>
