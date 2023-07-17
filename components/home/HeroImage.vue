<script setup lang="ts"></script>

<template>
  <svg
    viewBox="0 0 750 750"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <g clip-path="url(#circular_view)">
      <path
        d="M739.92 375C739.92 576.539 576.54 739.919 375 739.919C173.461 739.919 10.0807 576.539 10.0807 375C10.0807 173.461 173.461 10.0806 375 10.0806C576.54 10.0806 739.92 173.461 739.92 375Z"
        stroke="#BFD0A0"
        class="paths"
      />
      <path
        d="M750 375C750 582.107 582.107 750 375 750C167.893 750 0 582.107 0 375C0 167.893 167.893 0 375 0C582.107 0 750 167.893 750 375Z"
        stroke="#BFD0A0"
        class="paths"
      />
      <path
        d="M722.782 375C722.782 567.075 567.075 722.782 375 722.782C182.925 722.782 27.2177 567.075 27.2177 375C27.2177 182.925 182.925 27.2177 375 27.2177C567.075 27.2177 722.782 182.925 722.782 375Z"
        stroke="#BFD0A0"
        class="paths"
      />
      <path
        d="M732.863 375C732.863 572.642 572.642 732.863 375 732.863C177.358 732.863 17.1371 572.642 17.1371 375C17.1371 177.358 177.358 17.1371 375 17.1371C572.642 17.1371 732.863 177.358 732.863 375Z"
        stroke="#BFD0A0"
        class="paths"
      />
      <circle
        cx="375.069"
        cy="375.069"
        r="321.069"
        stroke="#BF4E70"
        stroke-width="8"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="16 32 48 64"
      />
      <circle
        cx="375.419"
        cy="375.419"
        r="302.419"
        fill="url(#pattern0)"
        stroke="#BFD0A0"
        stroke-width="4"
      />
      <g style="mix-blend-mode: overlay">
        <circle
          cx="375.42"
          cy="375.42"
          r="302.42"
          fill="#BF4E70"
          fill-opacity="0.75"
        />
        <circle
          cx="375.42"
          cy="375.42"
          r="302.42"
          stroke="#BF4E70"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </g>

    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlink:href="#image0_1_1232"
          transform="translate(0 -0.25) scale(0.0025)"
        />
      </pattern>

      <clipPath id="circular_view">
        <rect width="750" height="750" fill="white" />
      </clipPath>

      <image
        id="image0_1_1232"
        width="400"
        height="600"
        xlink:href="/output.webp"
      />
    </defs>
  </svg>
</template>

<style lang="scss" scoped>
svg {
  @apply w-full h-full;
}

.paths {
  stroke-dasharray: 2 4 6 8;
  stroke-width: 1.75;

  @apply stroke-cap-round stroke-join-round;
}
</style>
