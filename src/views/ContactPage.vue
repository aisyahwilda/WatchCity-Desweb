<script setup>
import Navbar from '../components/Navbar.vue'
import InfoMaps from '../components/InfoMaps.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <Navbar />

  <section class="relative w-full h-[35vh] bg-green-600 flex flex-col items-center justify-center text-center">

    <h1 class="text-white text-3xl md:text-4xl font-bold">Contact Us</h1>
    <p class="text-green-100 mt-2 text-sm md:text-base">
      Bersama Anda, Kota Kita Jadi Lebih Aman dan Nyaman
    </p>

  </section>

  <InfoMaps />

  <Footer />
</template>
