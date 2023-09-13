<script setup lang="ts">
import { PropType } from "nuxt/dist/app/compat/capi";
import Base from "./BaseModal.vue";
import { MediaItem } from "@/types";

type GalleryItemType = Omit<MediaItem, "details">;

const { isModalOpen, mediaItem } = defineProps({
  isModalOpen: { type: Boolean },
  mediaItem: { type: Object as PropType<GalleryItemType> },
});
</script>

<template>
  <Base :isOpen="isModalOpen" :title="mediaItem?.title" :src="mediaItem?.src" />
</template>
