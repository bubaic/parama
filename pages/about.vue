<script lang="ts" setup>
import { useStore } from "@/composables/store";

const { defaultSiteTitle } = useStore();

useSeoMeta({ title: `About ${defaultSiteTitle}` });
</script>

<template>
  <div class="page">
    <section class="page__content">
      <article>
        <h1>about us</h1>
        <p>
          Our Exclusive Beauty Salon running from a decade where you will find
          latest trends in beauty, skincare, hair-care, spa, mehndi, tattoo and
          piercing. We pride ourselves on providing quality services to meet the
          needs of clients with a competitive price tag. Parama Salon is a
          top-level beauty parlour with the finest of service quality. Our best
          interest is to make our customers feel their most beautiful by using
          only the best ingredients and products. We pride ourselves in
          providing a fun, relaxing experience while personalizing each guest's
          needs
        </p>
      </article>

      <article>
        <h3>our backbone</h3>
        <p>
          The lady behind the successes story is Mrs. Jharna Samanta owner and a
          beautician who has tremendous expertise & experience of 30 years in
          this industry. Her hard work and service with dedication is the only
          mantra behind Parama's stand out In this highly competitive industry.
        </p>
      </article>

      <article>
        <h3>brand collaborations</h3>
        <ul>
          <li>Lorem ipsum</li>
          <li>dolor sit</li>
          <li>amet consectetur</li>
          <li>adipisicing elit</li>
          <li>Odio a</li>
        </ul>
      </article>
    </section>

    <section class="page__image">
      <img src="/images/bg-about.webp" alt="about image" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/style/_mixins";
.page {
  @apply flex flex-col-reverse mx-auto min-h-screen-md mb-8 w-full
     px-4 mt-4 gap-2 lg:justify-center lg:max-w-[90vw]
    xl:my-0 xl:max-w-[1510px];

  &__content {
    @include bs-down;
    @include bs-right;
    @apply bg-lavender-bone-top rounded-xl mx-auto py-3 px-4 gap-2
      vstack sm:py-4 sm:px-6 lg:bg-lavender-bone-right lg:-ml-2
      lg:max-w-[40rem] lg:py-6 lg:px-8 lg:absolute xl:-ml-4
      xl:max-w-[60rem];

    article {
      @apply w-full;

      li {
        @apply bg-lavendar-alabaster border border-brand-background
          rounded-md shadow-sm py-0.25 px-1.75;
      }
    }
  }

  &__image {
    @apply rounded-xl h-sm object-cover flex-shrink-0 vstack
      overflow-hidden lg:h-lg lg:ml-auto xl:max-w-screen-md 
      xl:h-2xl;

    img {
      @apply h-full object-cover w-full;
    }
  }
}

// basics
h1 {
  @include visually-hidden;
}
h3 {
  @apply font-serif text-medium text-brand-secondary-alt capitalize;
}
p,
ul {
  @apply text-small text-brand-muted;
}
ul {
  @apply flex-wrap gap-2 hstack;
}
</style>
