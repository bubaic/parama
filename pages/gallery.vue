<script setup lang="ts">
import { IconGo } from "@/components/icon";
import { useStore } from "@/composables/store";

const isModalOpen = ref(false);

const mediaList = [
  { title: "", src: "images/img-002.jpg" },
  { title: "", src: "videos/vid-001.mp4" },
];

const getMediaType = (index: number) => {
  const imageTypes = /(jpg|jpeg|png|webp|avip)/g,
    itemType = mediaList[index].src.split(".")[1];

  return imageTypes.test(itemType) ? "image" : "video";
};

const { defaultSiteTitle } = useStore();
useSeoMeta({ title: `Gallery ${defaultSiteTitle}` });
</script>

<template>
  <div class="page">
    <h1>some moments that got captured</h1>

    <section class="cards">
      <button
        @click="isModalOpen = !isModalOpen"
        v-for="(item, idx) in mediaList"
        class="card"
      >
        <div class="card__media">
          <img
            v-if="getMediaType(idx) == 'image'"
            :src="item.src"
            :alt="'image of ' + item.title"
          />
          <video v-else :src="item.src" />

          <div class="icon-wrapper" role="button">
            <IconGo class="fill-current icon" />
          </div>
        </div>
      </button>
    </section>

    <Modal :is-modal-open="isModalOpen" />
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/style/mixins";

h1 {
  @include visually-hidden;
}

.page {
  min-height: inherit;
  @apply mx-auto xl:max-w-[1510px] <xl:px-6;
}

.cards {
  @apply <sm:mt-5 grid gap-6 grid-cols-2 sm:gap-6 sm:grid-cols-3
    lg:px-6 lg:grid-cols-5;
}

.card {
  transition: all 250ms ease-out;
  @apply outline-none gap-2 vstack sm:gap-4;

  &__media {
    @apply rounded-xl overflow-hidden relative;

    &::after {
      content: "";
      @apply -inset-2 transition-colors  duration-150 absolute
       filter blur-sm;
    }

    &:hover {
      .icon-wrapper {
        transition: visibility 300ms ease-out;
        @apply visible;
      }

      &::after {
        @apply bg-brand-secondary/50;
      }
    }
  }
}

.icon-wrapper {
  @apply bg-brand-background rounded-full h-15 grid transform top-1/2 left-1/2
    w-15 z-10 -translate-x-1/2 -translate-y-1/2 absolute
    place-items-center invisible;
}
</style>
