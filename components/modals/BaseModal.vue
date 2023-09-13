<script setup lang="ts">
import { gsap } from "gsap";
import FrameEl from "@/components/FrameEl.vue";

const { isOpen, details, src, title } = defineProps([
  "title",
  "src",
  "details",
  "isOpen",
]);

function onEnter(el: Element) {
  gsap.from(el, { opacity: 0, transform: "translateY(100%)" });
  gsap.to(el, {
    opacity: 1,
    duration: 0.75,
    ease: "back.inOut(1)",
    transform: "translateY(0)",
  });
}
</script>

<template>
  <Teleport to="body">
    <div
      class="wrapper"
      :class="
        isOpen
          ? 'pointer-events-default opacity-100'
          : 'pointer-events-none opacity-0'
      "
    >
      <Transition @enter="onEnter" v-show="isOpen">
        <div class="modal">
          <div class="modal__media" id="frame-wrapper">
            <FrameEl :src="src" />
          </div>

          <h3>{{ title }}</h3>
          <p>{{ details }}</p>

          <button class="close" @click="isOpen = !isOpen">
            <IconClose class="w-7" />
          </button>
        </div>
      </Transition>

      <div class="bg" v-show="isOpen" @click="isOpen = !isOpen" />
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.wrapper {
  @apply grid inset-0 z-9999 fixed place-items-center select-none;
}

.modal {
  @apply bg-brand-background rounded-lg z-1 filter drop-shadow-large
    absolute overflow-hidden vstack items-start tiny:mx-4 gap-2;

  &__media {
    @apply w-full;
  }

  p:not(:empty),
  h3:not(:empty) {
    @apply max-w-prose py-1 px-4 lowercase first-letter:capitalize;
  }
  h3:not(:empty) {
    @apply font-semibold font-sans text-xl text-brand-secondary-alt;
  }
  p:not(:empty) {
    @apply mb-3 text-brand-muted/95;
  }

  .close {
    @apply rounded-full bg-brand-primary/50 text-brand-background
      p-1 top-2 right-2 z-20 absolute;

    &:hover,
    &:focus,
    &:active {
      @apply bg-brand-primary;
    }
  }
}

.bg {
  @apply cursor-pointer bg-brand-muted/50 inset-0 absolute
    backdrop-filter backdrop-blur-[2px];
}
</style>
