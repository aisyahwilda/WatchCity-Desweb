<template>
  <section class="w-full py-16 px-6 md:px-12 lg:px-20">
    <h2 class="text-3xl md:text-4xl font-bold text-[#1F2F28] mb-10">
      Galeri Kegiatan Kota Balikpapan
    </h2>

    <div class="grid-layout">
      <div class="item item1 group">
        <img :src="images[0]" class="gallery-img group-hover:scale-105" />
      </div>

      <div class="item item2 group">
        <img :src="images[1]" class="gallery-img group-hover:scale-105" />
      </div>

      <div class="item item3 group">
        <img :src="images[2]" class="gallery-img group-hover:scale-105" />
      </div>

      <div class="item item4 group">
        <img :src="images[3]" class="gallery-img group-hover:scale-105" />
      </div>

      <div class="item item5 group">
        <img :src="images[4]" class="gallery-img group-hover:scale-105" />
      </div>

      <div class="item item6 group">
        <img :src="images[5]" class="gallery-img group-hover:scale-105" />
      </div>
    </div>
  </section>
</template>

<script setup>
const images = [
  '/anak.jpeg',
  '/bersih.jpg',
  '/sosial.jpeg',
  '/lingkungan.jpg',
  '/festival.png',
  '/lari.jpg',
  '/konser.jpg',
  '/run.jpg',
]
</script>

<style scoped>
.grid-layout {
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: masonry;
}

.item1 {
  grid-column: 1 / span 3;
}

.item2 {
  grid-column: 1 / span 2;
  height: 260px;
}

.item3 {
  grid-column: 3 / span 1;
  height: 260px;
}

.item4,
.item5,
.item6 {
  height: 220px;
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
  transition: 0.4s ease;
}

@media (max-width: 992px) {
  .grid-layout {
    grid-template-columns: repeat(2, 1fr);
  }
  .item1 {
    grid-column: 1 / span 2;
  }
  .item3 {
    height: 200px;
  }
  .item4,
  .item5,
  .item6 {
    height: 180px;
  }
}

@media (max-width: 640px) {
  .grid-layout {
    grid-template-columns: 1fr;
  }
  .item1,
  .item2,
  .item3,
  .item4,
  .item5,
  .item6 {
    grid-column: 1 / span 1;
    height: auto;
  }
  .gallery-img {
    height: auto;
  }
}
</style>
