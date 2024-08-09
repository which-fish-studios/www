<template>
  <div class="banner mb-4">
    <slot />
    <!-- <img src="/which_fish_banner.png" alt="Which Fish Banner" class="w-full" /> -->
  </div>
</template>

<style scoped>
.banner {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/which_fish_banner.png');

  /* Set a specific height */
  /* height: 50%; */

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
</style>
