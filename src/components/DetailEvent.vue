<script setup>
const emit = defineEmits(['close'])

const props = defineProps({
  title: String,
  date: String,
  image: String,
  location: String,
  time: String,
  description: String,
  goals: {
    type: Array,
    default: () => [],
  },
  activities: {
    type: Array,
    default: () => [],
  },
  audience: String,
  facilities: {
    type: Array,
    default: () => [],
  },
  note: String,
})

const goBack = () => {
  emit('close')
}
</script>

<template>
  <div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
    <div class="min-h-screen flex items-center justify-center p-4 sm:p-6">
      <div
        class="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-4xl my-8 relative animate-slideUp"
      >
        <!-- Close Button -->
        <button
          @click="goBack"
          class="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all z-10 group"
        >
          <svg
            class="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-gray-900 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div
          class="relative w-full h-48 sm:h-64 md:h-80 rounded-t-2xl sm:rounded-t-3xl overflow-hidden"
        >
          <img :src="image" alt="Event" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <h1
              class="text-white font-black text-2xl sm:text-3xl md:text-4xl leading-tight drop-shadow-lg"
            >
              {{ title }}
            </h1>
          </div>
        </div>

        <div class="p-5 sm:p-6 md:p-8 max-h-[60vh] overflow-y-auto">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 sm:mb-8">
            <div class="flex items-start gap-3">
              <div
                class="w-10 h-10 bg-gradient-to-br from-[#E1EEBC] to-[#90C67C] rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <img src="/kalender.png" alt="Date" class="w-5 h-5" />
              </div>
              <div>
                <p class="text-gray-500 text-xs sm:text-sm mb-0.5">Tanggal</p>
                <p class="text-gray-900 font-semibold text-sm sm:text-base">{{ date }}</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div
                class="w-10 h-10 bg-gradient-to-br from-[#E1EEBC] to-[#90C67C] rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <img src="/map.png" alt="Location" class="w-5 h-5" />
              </div>
              <div>
                <p class="text-gray-500 text-xs sm:text-sm mb-0.5">Lokasi</p>
                <p class="text-gray-900 font-semibold text-sm sm:text-base">{{ location }}</p>
              </div>
            </div>
          </div>

          <div v-if="time" class="mb-4 sm:mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p class="text-gray-500 text-xs sm:text-sm">Waktu</p>
              <p class="text-gray-900 font-semibold text-sm sm:text-base">{{ time }}</p>
            </div>
          </div>

          <div class="mb-6 sm:mb-8">
            <h2
              class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2"
            >
              <span
                class="w-1 h-6 bg-gradient-to-b from-[#328E6E] to-[#67AE6E] rounded-full"
              ></span>
              Tentang Acara
            </h2>
            <p class="text-gray-700 text-sm sm:text-base leading-relaxed">
              {{ description }}
            </p>
          </div>

          <div class="mb-6 sm:mb-8" v-if="goals && goals.length">
            <h2
              class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2"
            >
              <span
                class="w-1 h-6 bg-gradient-to-b from-[#328E6E] to-[#67AE6E] rounded-full"
              ></span>
              Tujuan Acara
            </h2>
            <ul class="space-y-2 sm:space-y-3">
              <li v-for="(goal, idx) in goals" :key="idx" class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-[#67AE6E] rounded-full mt-2 flex-shrink-0"></span>
                <p class="text-gray-700 text-sm sm:text-base">{{ goal }}</p>
              </li>
            </ul>
          </div>

          <div
            class="mb-6 sm:mb-8 bg-gradient-to-br from-[#E1EEBC]/50 to-transparent rounded-xl p-4 sm:p-5"
            v-if="activities && activities.length"
          >
            <h2
              class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2"
            >
              <span
                class="w-1 h-6 bg-gradient-to-b from-[#328E6E] to-[#67AE6E] rounded-full"
              ></span>
              Rangkaian Kegiatan
            </h2>
            <ul class="space-y-2 sm:space-y-3">
              <li v-for="(act, idx) in activities" :key="idx" class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-[#328E6E] rounded-full mt-2 flex-shrink-0"></span>
                <p class="text-gray-700 text-sm sm:text-base">{{ act }}</p>
              </li>
            </ul>
          </div>

          <div class="mb-6 sm:mb-8" v-if="audience">
            <h2
              class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2"
            >
              <span
                class="w-1 h-6 bg-gradient-to-b from-[#328E6E] to-[#67AE6E] rounded-full"
              ></span>
              Sasaran Peserta
            </h2>
            <p class="text-gray-700 text-sm sm:text-base leading-relaxed">
              {{ audience }}
            </p>
          </div>

          <div class="mb-6 sm:mb-8" v-if="facilities && facilities.length">
            <h2
              class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2"
            >
              <span
                class="w-1 h-6 bg-gradient-to-b from-[#328E6E] to-[#67AE6E] rounded-full"
              ></span>
              Fasilitas
            </h2>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              <div
                v-for="(facility, idx) in facilities"
                :key="idx"
                class="bg-gradient-to-br from-[#E1EEBC] to-[#90C67C]/30 rounded-lg p-2.5 sm:p-3 text-center"
              >
                <p class="text-gray-800 text-xs sm:text-sm font-medium">{{ facility }}</p>
              </div>
            </div>
          </div>

          <div
            class="bg-gradient-to-r from-[#328E6E] to-[#67AE6E] rounded-xl p-4 sm:p-5"
            v-if="note"
          >
            <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">Catatan</h2>
            <p class="text-white text-sm sm:text-base leading-relaxed font-medium">
              {{ note }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideUp {
  animation: slideUp 0.3s ease-out;
}
</style>
