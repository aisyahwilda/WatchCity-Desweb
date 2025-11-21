<script setup>
import Navbar from '../components/Navbar.vue'
import HeroHome from '../components/Hero.vue'
import StatsSection from '@/components/StatsSection.vue'
import ActionCards from '@/components/ActionCards.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="absolute top-0 left-0 w-full z-50">  
  <Navbar />
  </div>

  <HeroHome />
  <StatsSection />
  <ActionCards />
  <Footer />
</template>

<style scoped>
</style>
