<script setup lang="ts">
import { PropType } from "nuxt/dist/app/compat/capi";
import Base from "./BaseModal.vue";
import { MediaItem } from "types";

const { isModalOpen, mediaItem } = defineProps({
  isModalOpen: { type: Boolean, required: true, default: false },
  mediaItem: { type: Object as PropType<MediaItem>, required: true },
});
</script>

<template>
  <Base
    :isOpen="isModalOpen"
    :title="mediaItem.title"
    :src="mediaItem.details?.video"
    :details="mediaItem.details?.text"
  />
</template>
