<template>
  <section class="w-full py-1 px-6">
    <div class="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">

      <div class="rounded-2xl shadow-xl overflow-hidden bg-white">
        <div
          class="h-28 bg-gradient-to-b from-[#90C67C] to-[#67AE6E] flex items-center justify-center"
        >
          <img
            src="/lmasalah.png"
            class="w-20 h-20 object-contain"
            alt="laporkan masalah"
          />
        </div>

        <div class="px-6 py-4">
          <h3 class="text-lg font-semibold">Laporkan Masalah</h3>
          <p class="text-gray-600 text-sm">
            Kirim laporan fasilitas umum yang rusak atau bermasalah di sekitar kamu.
          </p>

          <router-link
            to="/report"
            class="inline-block mt-4 text-[#328E6E] font-semibold hover:underline"
          >
            Buka Formulir
          </router-link>
        </div>
      </div>

      <!-- CARD 2 - EVENT MENDATANG -->
      <div class="rounded-2xl shadow-xl overflow-hidden bg-white">
        <div
          class="h-28 bg-gradient-to-b from-[#90C67C] to-[#67AE6E] flex items-center justify-center"
        >
          <img
            src="/edatang.png"
            class="w-20 h-20 object-contain"
            alt="event mendatang"
          />
        </div>

        <div class="px-6 py-4">
          <h3 class="text-lg font-semibold">Event Mendatang</h3>
          <p class="text-gray-600 text-sm">
            Ketahui jadwal acara kota dan kegiatan sosial yang bisa kamu ikuti.
          </p>

          <router-link
            to="/events"
            class="inline-block mt-4 text-[#328E6E] font-semibold hover:underline"
          >
            Lihat Event
          </router-link>
        </div>
      </div>

    </div>
  </section>
</template>
