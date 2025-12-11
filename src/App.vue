<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div
    :class="[
      'min-h-screen flex flex-col',
      route.path === '/' ? '' : 'pt-[72px] md:pt-[88px]'
    ]"
  >
    <Navbar />

    <div class="flex-1">
      <RouterView />
    </div>

    <Footer />
  </div>
</template>
