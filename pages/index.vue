<script lang="ts" setup>
import { defaultSiteTitle } from "@/composables/store";
import HeroImage from "@/components/home/HeroImage.vue";

const pageTitle = `Home ${defaultSiteTitle}`;

useSeoMeta({ title: pageTitle });
</script>

<template>
  <section class="page">
    <div class="page__content">
      <div>
        <h2>Experience the beauty in you</h2>
        <h1>Enhancing Your inner beauty, one strand at a time</h1>
      </div>

      <p>
        We're dedicated to making you feel beautiful and confident. Our expert
        stylists are here to help you achieve your desired look, whether you
        want a sleek-and-stylish cut or a bold-and-vibrant colour. We use the
        highest quality products & techniques to ensure that you leave feeling
        fabulous.
      </p>

      <button class="bg-brand-accent rounded text-brand-background py-2 px-4">
        Book your seat
      </button>
    </div>

    <div class="page__image">
      <HeroImage class="-my-0" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.page {
  @apply container mx-auto w-full grid grid-cols-1 justify-items-end
   items-center my-5 px-4 lg:grid-cols-2 gap-4 md:gap-8 xl:gap-12;

  &__content {
    @apply w-full gap-3 sm:gap-6 vstack lg:items-start
      <md:text-center;

    div {
      @apply gap-1 vstack <lg:text-center;

      h1 {
        @apply font-serif text-large text-brand-primary leading-none
          uppercase;
      }

      h2 {
        @apply font-sans text-brand-accent text-small w-full capitalize;
      }
    }

    p {
      @apply text-small font-sans text-brand-muted/95 <sm:px-2
        <lg:text-center;
    }
  }
}
.page__image {
  @apply relative hstack justify-center w-full <lg:py-8;
}
</style>
