<template>
  <section class="container mx-auto px-4 pb-20">
    <div
      class="grid
             grid-cols-1
             sm:grid-cols-2
             lg:grid-cols-3
             gap-6"
    >
      <div
        v-for="(item, index) in cards"
        :key="index"
        class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
      >
        <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
        <p class="text-gray-600 mb-4">{{ item.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const cards = ref([
  {
    title: "Membaca",
    desc: "Saya sangat suka membaca novel",
  },
  {
    title: "UI Design",
    desc: "Saya memiliki keahlian dalam merancang antarmuka pengguna yang menarik dan intuitif.",
  },
  {
    title: "Programming",
    desc: "Saya memiliki kemampuan dalam berbagai bahasa pemrograman seperti JavaScript, Python, dan Java.",
  },
]);
</script>

<style scoped></style>