<script setup lang="ts">
import { ref } from "vue-demi";

const { src } = defineProps(["src"]),
  iFrame = ref();

function frameStyles() {
  const frame = iFrame.value.contentWindow.document as Document,
    style = frame.createElement("style");

  style.textContent =
    "img, video {width: 100%; height: 100%; object-fit: cover}";

  frame.head.append(style);
}
</script>

<template>
  <iframe :src="src" id="media" ref="iFrame" @load="frameStyles" />
</template>

<style scoped lang="scss">
#media {
  @apply rounded-t-lg min-h-sm object-cover w-full relative tiny:min-w-xs
    sm:min-w-md md:min-w-lg sm:min-h-md lg:min-h-screen-sm;
}
</style>
