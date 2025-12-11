<template>
  <section class="w-full bg-white pt-1 pb-14 px-4 sm:px-6">
    <div class="max-w-6xl mx-auto">
      <div class="card-grid grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        <div class="feature-card group">
          <div class="card-img">
            <img
              src="/comson.png"
              alt="Laporkan Masalah"
              class="w-20 h-20 sm:w-24 sm:h-24 object-contain"
            />
          </div>

          <div class="card-content">
            <h3 class="card-title">Laporkan Masalah</h3>
            <p class="card-description">
              Kirim laporan fasilitas umum yang rusak atau bermasalah di sekitar kamu.
            </p>

            <RouterLink to="/report" class="card-action">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                ></path>
              </svg>
              <span>Buka Formulir</span>
            </RouterLink>
          </div>
        </div>

        <div class="feature-card group">
          <div class="card-img">
            <img
              src="/report.png"
              alt="Event Icon"
              class="w-20 h-20 sm:w-24 sm:h-24 object-contain"
            />
          </div>

          <div class="card-content">
            <h3 class="card-title">Event Mendatang</h3>
            <p class="card-description">
              Ketahui jadwal acara kota dan kegiatan sosial yang bisa kamu ikuti.
            </p>

            <RouterLink to="/events" class="card-action">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                ></path>
              </svg>
              <span>Lihat Event</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.feature-card {
  width: 100%;
  max-width: 320px;
  min-height: 260px;
  height: auto;
  background: linear-gradient(145deg, #ffffff, #f3f3f3);
  border-radius: 30px;
  box-shadow:
    10px 10px 25px #d1d1d1,
    -10px -10px 25px #ffffff;
  transition: all 0.2s ease-in-out;
  margin: 0 auto;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

@media (min-width: 640px) and (max-width: 900px) {
  .card-grid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    align-items: stretch;
    gap: 20px;
  }
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.12);
}

.card-img {
  width: 100%;
  height: 50%;
  padding: 25px 0;
  border-radius: 30px 30px 0 0;
  background: linear-gradient(135deg, #e1eebc, #67ae6e);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-img img {
  transition: transform 0.25s ease-in-out;
  width: clamp(72px, 18vw, 96px);
  height: clamp(72px, 18vw, 96px);
}
.feature-card:hover .card-img img {
  transform: scale(1.08);
}

.card-content {
  padding: 16px 14px;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: clamp(15px, 3.4vw, 17px);
  font-weight: 700;
  color: #222;
}

.card-description {
  font-size: clamp(12.5px, 3vw, 14px);
  color: #7b7b7b;
  line-height: 1.4;
  margin-top: 2px;
  word-break: break-word;
}

.card-action {
  margin-top: 12px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 4px;
  background-color: transparent;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
}

.card-action span {
  font-size: clamp(12px, 2.8vw, 13px);
  font-weight: 600;
  color: #328e6e;
}

.card-action svg {
  color: #328e6e;
  width: clamp(14px, 3vw, 16px);
  height: clamp(14px, 3vw, 16px);
}

.feature-card:hover .card-action {
  padding: 6px 14px;
  background-color: #67ae6e;
  transform: translateX(2px);
}

.feature-card:hover .card-action span,
.feature-card:hover .card-action svg {
  color: white;
}

@media (min-width: 1024px) {
  .feature-card {
    max-width: 100%;
  }
}

.stat-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  text-align: center;
  padding: 14px 10px;
  border-radius: 20px;
  background: linear-gradient(135deg, #328e6e, #67ae6e);
  color: white;
  width: 100%;
  min-height: 120px;
  max-width: 100%;
  overflow-wrap: break-word;
  word-break: break-word;
}

.stat-card img,
.stat-card svg {
  width: clamp(22px, 5vw, 40px);
  height: clamp(22px, 5vw, 40px);
}

.stat-number {
  font-size: clamp(16px, 4.5vw, 22px);
  font-weight: 800;
  line-height: 1.1;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.stat-label {
  font-size: clamp(9px, 2vw, 12px);
  line-height: 1.2;
  max-width: 100%;
  overflow: break-word;
  word-break: break-word;
  white-space: normal;
  hyphens: auto;
}
</style>
