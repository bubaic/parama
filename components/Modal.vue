<script setup lang="ts">
import { PropType } from ".nuxt/imports";
import { MediaType } from "types";

const { isModalOpen, mediaItem } = defineProps({
  isModalOpen: { type: Boolean },
  mediaItem: { type: Object as PropType<MediaType>, default: {} },
});

function getMediaItemType(source: string) {
  const imageTypes = /(jpg|jpeg|png|webp|avip)/g;

  return imageTypes.test(source?.split(".")[1]) ? "image" : "video";
}
</script>

<template>
  <Teleport to="body">
    <div class="wrapper" v-if="isModalOpen">
      <div class="modal">
        <div class="modal__media">
          <img
            v-if="getMediaItemType(mediaItem.src) == 'image'"
            :src="mediaItem.src"
            :alt="'image of ' + mediaItem.title"
          />
          <video v-else preload="metadata" controls autoplay>
            <source :src="mediaItem.src" />
          </video>
        </div>

        <h3>{{ mediaItem.title }}</h3>
        <p>{{ mediaItem.details }}</p>

        <button class="close" @click="isModalOpen = !isModalOpen">
          <IconClose class="w-7" />
        </button>
      </div>

      <div class="bg" @click="isModalOpen = !isModalOpen" />
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.wrapper {
  @apply grid inset-0 z-9999 fixed place-items-center select-none;
}

.modal {
  animation: slideUp 250ms ease-out forwards;
  @apply bg-brand-background rounded-lg text-brand-primary top-1/2 z-1
    filter drop-shadow-large absolute overflow-hidden <sm:mx-4;

  img,
  video {
    @apply rounded-t-lg max-h-screen-sm object-cover h-[calc(100vh-10rem)]
      w-full;
  }

  p:not(:empty),
  h3:not(:empty) {
    @apply p-3 lowercase first-letter:capitalize;
  }
  h3 {
    @apply font-semibold font-sans text-xl;
  }

  .close {
    @apply rounded-full bg-brand-primary/50 text-white p-1 top-2
      right-2 absolute;

    &:hover,
    &:focus,
    &:active {
      @apply bg-brand-primary;
    }
  }
}
@keyframes slideUp {
  from {
    opacity: 0;
  }
  to {
    transform: translateY(-50%);
    opacity: 1;
  }
}

.bg {
  @apply bg-brand-muted/50 inset-0 absolute backdrop-filter
    backdrop-blur-[2px];
}
</style>
