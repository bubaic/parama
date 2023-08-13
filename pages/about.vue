<script lang="ts" setup>
import { useStore } from "@/composables/store";

const { defaultSiteTitle } = useStore();

useSeoMeta({ title: `Home ${defaultSiteTitle}` });
</script>

<template>
  <div class="page">
    <section class="page__content">
      <p>
        Our Exclusive Beauty Salon running from a decade where you will find
        latest trends in beauty, skincare, hair-care, spa, mehndi, tattoo and
        piercing. We pride ourselves on providing quality services to meet the
        needs of clients with a competitive price tag. Parama Salon is a
        top-level beauty parlour with the finest of service quality. Our best
        interest is to make our customers feel their most beautiful by using
        only the best ingredients and products. We pride ourselves in providing
        a fun, relaxing experience while personalizing each guest's needs
      </p>

      <div>
        <h3>our backbone</h3>
        <p>
          The lady behind the successes story is Mrs. Jharna Samanta owner and a
          beautician who has tremendous expertise & experience of 30 years in
          this industry. Her hard work and service with dedication is the only
          mantra behind Parama's stand out In this highly competitive industry.
        </p>
      </div>

      <div>
        <h3></h3>
        <p></p>
      </div>
    </section>
    <section class="page__image">
      <img src="" alt="" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.page {
  @apply container mx-auto my-5 w-full px-4 gap-4 
    vstack md:gap-8 xl:gap-12;

  &__content {
    @apply bg-lavender-bone-top rounded-t-xl mx-auto max-w-screen-md py-3
      px-4 sm:py-4 sm:px-6 lg:bg-lavender-bone-right lg:rounded-r-xl
      lg:py-6 lg:px-8 vstack gap-2;
  }
}

h3 {
  @apply font-serif text-medium text-brand-secondary-alt capitalize;
}
p {
  @apply text-small text-brand-muted;
}
</style>
