<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section
    class="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
    style="background-image: url('/Hero.jpeg')"
  >
    <div class="absolute inset-0 bg-black/50"></div>

    <div class="relative z-20 text-center px-4 md:px-6 lg:px-8">
      <h1
        class="text-white font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight uppercase drop-shadow-2xl"
      >
        YOUR CITY,<br />
        SMARTER WITH<br />
        YOU
      </h1>

      <RouterLink
        to="/report"
        class="inline-block mt-6 md:mt-8 px-6 md:px-8 lg:px-10 py-3 md:py-4 text-base sm:text-lg md:text-xl lg:text-2xl font-bold rounded-full shadow-lg hover:opacity-90 transition-all"
        style="
          background: linear-gradient(180deg, #67ae6e 0%, #90c67c 50%, #e1eebc 100%);
          color: #18523e;
        "
      >
        Report Now
      </RouterLink>
    </div>
  </section>
</template>
