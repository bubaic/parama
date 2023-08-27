<script lang="ts" setup>
import { useStore } from "@/composables/store";
import HeroImage from "@/components/home/HeroImage.vue";

const { defaultSiteTitle } = useStore();

useSeoMeta({ title: `Home ${defaultSiteTitle}` });
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

      <a href="#whatsapp-link" class="btn">Book your seat</a>
    </div>

    <div class="page__image">
      <HeroImage class="-my-0" />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../assets/style/mixins";

.page {
  @apply mx-auto my-5 w-full grid px-4 gap-4 grid-cols-1
    justify-items-end items-center md:gap-8 lg:px-6 lg:grid-cols-2
    xl:max-w-[1510px] xl:gap-12;

  &__content {
    @apply w-full gap-3 vstack sm:gap-6 <md:text-center
      lg:items-start;

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
      @apply font-sans text-small text-brand-muted/95 <sm:px-2
        <lg:text-center;
    }
  }
}
.page__image {
  @apply w-full relative hstack justify-center <lg:py-8;
}

.btn {
  @include btn;
  @apply bg-brand-accent text-brand-background text-small font-sans
    font-bold;
}
</style>
