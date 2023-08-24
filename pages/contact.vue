<script lang="ts" setup>
const { defaultSiteTitle } = useStore();
useSeoMeta({ title: `Contact ${defaultSiteTitle}` });
</script>

<template>
  <div class="page">
    <section class="page__content">
      <div class="img-wrapper">
        <div class="overlay"></div>
        <img src="/images/bg-contact.webp" alt="parama contact image" />
      </div>

      <div class="text-contents">
        <h1>Contact Us</h1>

        <div>
          <span class="icon-wrapper"><IconPhone /></span>
          <a href="tel:+9186973 35582">+9186973 35582</a>
        </div>

        <div>
          <span class="icon-wrapper"><IconMail /></span>
          <a href="mailto:theparama.com@gmail.com">theparama.com@gmail.com</a>
        </div>

        <div>
          <span class="icon-wrapper"><IconMap /></span>
          <span>
            7/14A, Dum Dum Rd, Opposite Mitra café, Kolkata, West Bengal 700030
          </span>
        </div>
      </div>

      <div class="whatsapp-cta">
        <span class="whatsapp-cta--icon"><IconWa /></span>
        <a href="#" class="whatsapp-cta--btn">
          Want to know more? Start a chat
        </a>
      </div>
    </section>

    <!-- embed google map -->
    <section class="page__location-map">
      <div class="overlay"></div>

      <!-- src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.913949065846!2d88.38907677599273!3d22.61968833124157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89df09ef5fc2f%3A0xc0d7e8512f0dffc5!2s7%2F14A%2C%20Dum%20Dum%20Rd%2C%20Bir%20Para%2C%20Satpukur%2C%20Kolkata%2C%20West%20Bengal%20700030!5e0!3m2!1sen!2sin!4v1692196971355!5m2!1sen!2sin" -->
      <iframe
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/style/_mixins";

.page {
  @apply container mx-auto mb-12 vstack justify-between xl:max-w-[1510px]
  xl:hstack xl:items-stretch;

  &__content {
    @apply w-full gap-8 vstack items-start xl:max-w-screen-sm xl:gap-4;
  }

  &__location-map {
    @include bs-down;
    @apply w-full shadow-brand-muted/30 overflow-hidden relative
      <sm:mx-4 xl:h-screen-sm xl:w-screen-md xl:shadow-2xl;
  }
}

.overlay {
  @apply bg-brand-accent inset-0 absolute mix-blend-hue 
    pointer-events-none;
}

.img-wrapper {
  @apply overflow-hidden relative sm:rounded-xl;

  &::after {
    content: "";
    @apply absolute inset-0 top-2/3 bg-gradient-to-t from-brand-background to-transparent
      sm:hidden;
  }
}

.text-contents {
  @apply w-full <sm:px-4 <sm:-mt-12 <sm:-mb-4 xl:max-w-[560px] z-10;

  & > * {
    @apply gap-2 hstack md:gap-4 first:mb-4 not-first:my-2
      xl:last:items-start;
  }
  .icon-wrapper {
    @apply bg-brand-muted rounded-full p-1.5 hstack;

    & > * {
      @apply h-4 sm:h-6;
    }
  }

  a {
    @apply underline underline-offset-4 sm:underline-0;
  }
}

.whatsapp-cta {
  box-shadow: 2px 4px #784b58;
  @apply bg-brand-accent border rounded-full border-brand-secondary-alt/60 py-0.5 pr-2
    pl-1.25 gap-1 sm:gap-2 hstack sm:p-1 sm:pr-3 sm:pl-1.5 <sm:mx-4 <xl:mb-10;

  &--icon {
    @apply bg-lavendar-alabaster rounded-full p-1;

    & > * {
      @apply w-5 sm:w-7;
    }
  }

  &--btn {
    @apply font-bold h-full text-brand-background py-2;
  }
}

iframe {
  @apply border-none rounded-xl min-h-sm w-full xl:h-screen-sm;
}

h1 {
  @apply font-serif text-large text-brand-primary leading-none;
}

a,
span {
  @apply font-medium text-small text-brand-muted leading-tight;
}
</style>
