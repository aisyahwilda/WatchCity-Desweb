<template>
  <section class="relative w-full h-[75vh] bg-cover bg-center" 
  style="background-image: url('/Hero.jpeg');">

    <Navbar /> 

    <div class="absolute inset-0 bg-black/30"></div>

    <div class="relative z-20 h-full flex flex-col items-center justify-start text-center h-full pt-32 md:pt-36 px-6">
      <h1 class="text-white font-extrabold text-5xl md:text-7xl leading-tight drop-shadow-2xl tracking-wide">
        YOUR CITY,<br />
        SMARTER WITH<br />
        YOU
      </h1>

      <div class="mt-6">
        <router-link
          to="/report"
          class="mt-6 px-7 py-3 rounded-full font-bold text-[#1C523E] bg-[linear-gradient(to_bottom,#67AE6E,#B4E7A0,rgba(255,255,255,0.95))]
                  transition-all duration-300 hover:scale-110"
          >
            Laporkan Sekarang
          </router-link>

      </div>
    </div>
  </section>
</template>

<script setup>
</script>

