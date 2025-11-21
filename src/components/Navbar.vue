<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="w-full flex items-center justify-between px-5 absolute top-0 left-0 z-50">

    <img 
      src="/logo-citywatch.png" 
      alt="CityWatch Logo" 
      class="w-24 object-contain"
    />

    <nav class="flex items-center gap-5 px-5 py-1 rounded-full bg-[rgba(92,143,128,0.70)] backdrop-blur-lg shadow-[0_4px_12px_rgba(0,0,0,0.10)] text-[#E1EEBC] font-semibold tracking-wide"
>

      <RouterLink
        to="/"
        class="px-6 py-2 rounded-full transition-all duration-300"
        :class="{ 'bg-[#1F3D33] text-white shadow-inner': $route.path === '/',
        'hover:bg-[rgba(50,142,110,0.25)]': $route.path !== '/' }"
      >
        Home
      </RouterLink>

       <RouterLink
        to="/about"
        class="px-6 py-2 rounded-full transition-all duration-300"
        :class="{ 'bg-[#1F3D33] text-white shadow-inner': $route.path === '/about',
        'hover:bg-[rgba(50,142,110,0.25)]': $route.path !== '/about' }"
      >
        About
      </RouterLink>

       <RouterLink
        to="/report"
        class="px-6 py-2 rounded-full transition-all duration-300"
        :class="{ 'bg-[#1F3D33] text-white shadow-inner': $route.path === '/report',
        'hover:bg-[rgba(50,142,110,0.25)]': $route.path !== '/report' }"
      >
        Report
      </RouterLink>

       <RouterLink
        to="/events"
        class="px-6 py-2 rounded-full transition-all duration-300"
        :class="{ 'bg-[#1F3D33] text-white shadow-inner': $route.path === '/events',
        'hover:bg-[rgba(50,142,110,0.25)]': $route.path !== '/events' }"
      >
        Events
      </RouterLink>
    </nav>

      <RouterLink to="/contact" class="flex items-center gap-3">
      <div
        class="w-10 h-10 rounded-full bg-[#328E6E] flex items-center justify-center shadow-md hover:scale-100 transition"
      >
        <svg
          class="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      <span class="text-[#FFFFFF] font-semibold tracking-wide text-l">
        CONTACT US
      </span>
    </RouterLink>
  </header>
</template>
