<script setup>
import { ref, onMounted } from "vue";

const laporan = ref(0);
const events = ref(0);
const diperbaiki = ref(0);

function animate(refVar, target, duration = 1200) {
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const percent = Math.min(progress / duration, 1);

    refVar.value = Math.floor(percent * target);

    if (percent < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

onMounted(() => {
  const el = document.querySelector("#stats-section");

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animate(laporan, 100);
        animate(events, 50);
        animate(diperbaiki, 25);
        observer.disconnect();
      }
    },
    { threshold: 0.4 }
  );

  observer.observe(el);
});
</script>

<template>
  <section id="stats-section" class="w-full py-16 px-6">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">

       <div
        class="flex items-center gap-7 bg-[#328E6E] text-white px-7 py-5 rounded-3xl shadow-xl"
      >
        <img
          src="/laporan.png"
          class="w-20 h-20 object-contain"
          alt="laporan icon"
        />

        <div>
          <p class="text-6xl font-extrabold">{{ laporan }}</p>
          <p class="text-xl">Laporan</p>
        </div>
      </div>

      <div
        class="flex items-center gap-7 bg-[#67AE6E] text-white px-7 py-5 rounded-3xl shadow-xl"
      >
        <img
          src="/event.png"
          class="w-20 h-20 object-contain"
          alt="event icon"
        />

        <div>
          <p class="text-6xl font-extrabold">{{ events }}</p>
          <p class="text-xl">Events</p>
        </div>
      </div>

      <div
        class="flex items-center gap-7 bg-[#90C67C] text-white px-7 py-5 rounded-xl shadow-xl"
      >
        <img
          src="/diperbaiki.png"
          class="w-20 h-20 object-contain"
          alt="diperbaiki icon"
        />

        <div>
          <p class="text-6xl font-extrabold">{{ diperbaiki }}</p>
          <p class="text-xl">Fasilitas Diperbaiki</p>
        </div>
      </div>

    </div>
  </section>
</template>
