<script setup lang="ts">
const { isModalOpen } = defineProps(["isModalOpen"]);
</script>

<template>
  <Teleport to="body">
    <div class="wrapper" v-if="isModalOpen">
      <div class="modal">
        <p>Hello from the modal!</p>
        <button @click="isModalOpen = false">Close</button>
      </div>

      <div class="bg" @click="isModalOpen = false" />
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.wrapper {
  @apply grid inset-0 z-9999 fixed place-items-center select-none;
}
.modal {
  @apply bg-white p-4 transform z-1 -translate-y-1/2 filter 
    drop-shadow-large;
}

.bg {
  @apply bg-dark-800/80 inset-0 absolute filter backdrop-blur-lg;
}
</style>
