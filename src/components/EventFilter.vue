<template>
  <div class="w-full mb-4">
    <div class="flex gap-3 overflow-x-auto no-scrollbar pb-1 md:flex-wrap">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="$emit('update:selected', cat)"
        :class="[
          'px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap shadow-sm',
          'border',
          selected === cat
            ? 'text-white border-transparent'
            : 'text-gray-700 border-gray-300 bg-white hover:bg-[#E1EEBC]',
          selected === cat && catColor,
        ]"
      >
        {{ cat }}
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  selected: {
    type: String,
    default: 'Semua',
  },
  categories: {
    type: Array,
    default: () => [
      'Semua',
      'Kebersihan & Lingkungan',
      'Kesehatan & Olahraga',
      'Komunitas & Sosial',
      'Budaya & Festival',
      'Lingkungan Hidup',
      'Pendidikan & Anak',
    ],
  },
})

const catColor = 'bg-[#328E6E]'
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
