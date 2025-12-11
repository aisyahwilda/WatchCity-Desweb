<script setup>
const emit = defineEmits(['view-detail'])

const props = defineProps({
  id: [String, Number],
  image: String,
  title: String,
  date: String,
  locationName: String,
  locationUrl: String,
  description: String,
  tags: Array,
  time: {
    type: String,
    default: '08.00 - 16.00 WITA',
  },
  goals: Array,
  activities: Array,
  audience: String,
  facilities: Array,
  note: String,
})

const openDetail = () => {
  emit('view-detail', {
    id: props.id,
    title: props.title,
    date: props.date,
    image: props.image,
    location: props.locationName,
    time: props.time,
    description: props.description,
    goals: props.goals,
    activities: props.activities,
    audience: props.audience,
    facilities: props.facilities,
    note: props.note,
  })
}
</script>

<template>
  <div
    class="w-full bg-white rounded-2xl shadow-md p-4 flex flex-col md:flex-row gap-4 relative hover: shadow-xl transation-shadow"
  >
    <div
      class="flex flex-wrap items-center gap-2 justify-end w-full md:w-auto md:absolute md:top-4 md:right-4 order-2 md:order-none"
    >
      <span
        v-for="tag in tags"
        :key="tag"
        class="px-2 sm:px-3 py-1 text-xs sm:text-xs rounded-full bg-[#E1EEBC] text-[#1F2F28] whitespace-nowrap"
      >
        {{ tag }}
      </span>
    </div>

    <div
      class="w-full md:w-48 h-40 sm:h-48 rounded-xl overflow-hidden flex-shrink-0 mx-auto md:mx-0 order-1 md:order-none cursor-pointer"
      @click="openDetail"
    >
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover hover:scale-105 transition-transform"
      />
    </div>

    <div class="flex flex-col justify-start flex-1 md:mt-0 order-3 md:order-none">
      <h2
        class="text-lg sm:text-xl font-semibold text-[#1F2F28] cursor-pointer hover:text-[#328E6E] transition-colors"
        @click="openDetail"
      >
        {{ title }}
      </h2>

      <p class="text-xs sm:text-sm md:text-base text-gray-700 mt-2 line-clamp-2">
        {{ description }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
        <div class="flex items-start gap-2">
          <img
            src="/map.png"
            alt="Lokasi"
            class="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 object-contain flex-shrink-0 mt-1"
          />
          <div class="min-w-0">
            <p class="text-gray-500 text-xs sm:text-sm">Lokasi</p>
            <p class="text-[#1F2F28] font-medium text-xs sm:text-sm truncate">
              {{ locationName }}
            </p>
          </div>
        </div>

        <div class="flex items-start gap-2">
          <img
            src="/kalender.png"
            alt="Tanggal"
            class="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 object-contain flex-shrink-0 mt-1"
          />
          <div class="min-w-0">
            <p class="text-gray-500 text-xs sm:text-sm">Tanggal</p>
            <p class="text-[#1F2F28] font-medium text-xs sm:text-sm truncate">
              {{ date }}
            </p>
          </div>
        </div>
      </div>

      <div class="flex justify-end mt-4">
        <button @click="openDetail" class="text-[#328E6E] text-sm font-semibold hover:underline">
          Selengkapnya
        </button>
      </div>
    </div>
  </div>
</template>
