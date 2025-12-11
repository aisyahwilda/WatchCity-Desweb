<script setup>
import { ref, computed } from "vue"
import { useRoute, RouterLink } from "vue-router"

const mobileMenuOpen = ref(false)
const toggleMenu = () => (mobileMenuOpen.value = !mobileMenuOpen.value)

const route = useRoute()

const isHome = computed(() => route.path === "/")
const isActive = (path) => route.path === path
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full h-[72px] md:h-[88px] flex items-center justify-between px-4 md:px-8 z-50 backdrop-blur-md transition-all duration-300',
      isHome ? 'bg-transparent text-white' : 'bg-white text-[#1f2f28] shadow-sm'
    ]"
  >
    <RouterLink to="/" class="flex items-center">
      <img
        src="/logo-citywatch.png"
        alt="CityWatch Logo"
        class="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain drop-shadow-xl cursor-pointer"
      />
    </RouterLink>

    <nav class="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 font-semibold">
      <RouterLink
        v-for="item in [
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
          { name: 'Report', path: '/report' },
          { name: 'Events', path: '/events' }
        ]"
        :key="item.path"
        :to="item.path"
        :class="[
          'pb-1 transition',
          isHome ? 'hover:text-green-300' : 'hover:text-[#328E6E]',
          isActive(item.path)
            ? (isHome ? 'border-b-2 border-white' : 'border-b-2 border-[#328E6E]')
            : ''
        ]"
      >
        {{ item.name }}
      </RouterLink>
    </nav>

    <RouterLink
      to="/contact"
      class="hidden md:block pb-1 font-semibold transition"
      :class="[
        isHome ? 'text-white hover:text-green-300' : 'text-[#1f2f28] hover:text-[#328E6E]',
        isActive('/contact')
          ? (isHome ? 'border-b-2 border-white' : 'border-b-2 border-[#328E6E]')
          : ''
      ]"
    >
      Contact Us
    </RouterLink>

    <button
      @click="toggleMenu"
      class="md:hidden"
      :class="isHome ? 'text-white' : 'text-[#1f2f28]'"
    >
      <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          v-if="!mobileMenuOpen"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
        <path
          v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </header>

  <div
    v-if="mobileMenuOpen"
    class="md:hidden fixed top-[72px] left-0 w-full bg-black/90 backdrop-blur-md py-4 z-40"
  >
    <nav class="flex flex-col items-center gap-6 text-white text-lg font-semibold">
      <RouterLink
        v-for="item in [
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
          { name: 'Report', path: '/report' },
          { name: 'Events', path: '/events' },
          { name: 'Contact Us', path: '/contact' }
        ]"
        :key="item.path"
        :to="item.path"
        @click="toggleMenu"
        class="transition hover:text-green-300"
      >
        {{ item.name }}
      </RouterLink>
    </nav>
  </div>
</template>
