<template>
  <section class="w-full bg-white py-16 px-4 sm:px-6">
    <div class="max-w-5xl mx-auto text-center mb-14">
      <h2 class="text-3xl sm:text-4xl font-black text-gray-900">How CityWatch Works</h2>

      <div class="mt-3 flex justify-center">
        <span
          class="inline-block h-1 w-28 rounded-full bg-gradient-to-r from-[#328E6E] via-[#67AE6E] to-[#E1EEBC]"
        >
        </span>
      </div>

      <p class="mt-4 text-slate-600 max-w-2xl mx-auto">
        Proses cepat dan transparan untuk membantu warga melaporkan fasilitas umum.
      </p>
    </div>

    <div class="relative max-w-4xl mx-auto">
      <div
        class="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[3px] bg-gradient-to-b from-[#328E6E] via-[#67AE6E] to-[#E1EEBC] z-0"
      ></div>

      <div class="timeline-item">
        <div class="timeline-content left order-1 md:order-none">
          <h3 class="title">1. Isi Formulir Laporan</h3>
          <p class="desc">Masukkan nama, lokasi, kategori, tanggal, dan foto.</p>
        </div>

        <div class="dot order-2 md:order-none"></div>

        <div
          class="timeline-content right flex justify-center md:justify-start order-3 md:order-none"
        >
          <div class="icon-box">
            <img src="/report.png" class="icon-img" />
          </div>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-content left order-1 md:order-none">
          <h3 class="title md:hidden">2. Laporan Berhasil Dikirim</h3>
          <p class="desc md:hidden">Laporan muncul di daftar laporan secara real-time.</p>
          <div class="hidden md:flex justify-center md:justify-end">
            <div class="bubble">Laporan berhasil terkirim.</div>
          </div>
        </div>

        <div class="dot order-2 md:order-none"></div>

        <div class="timeline-content right order-3 md:order-none">
          <div class="flex justify-center md:justify-start md:hidden mb-3">
            <div class="bubble">Laporan berhasil terkirim.</div>
          </div>
          <h3 class="title hidden md:block">2. Laporan Berhasil Dikirim</h3>
          <p class="desc hidden md:block">Laporan muncul di daftar laporan secara real-time.</p>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-content left order-1 md:order-none">
          <h3 class="title">3. Laporan Diproses Admin</h3>
          <p class="desc">Admin meninjau laporan dan mengubah status menjadi Diproses.</p>
        </div>

        <div class="dot order-2 md:order-none"></div>

        <div
          class="timeline-content right flex justify-center md:justify-start order-3 md:order-none"
        >
          <div class="bubble">Status laporan: <b>Diproses</b></div>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-content left order-1 md:order-none">
          <h3 class="title md:hidden">4. Warga Memantau Status</h3>
          <p class="desc md:hidden">Warga dapat memantau perkembangan laporan secara berkala.</p>
          <div class="hidden md:flex justify-center md:justify-end">
            <div class="flex gap-3">
              <div class="status-dot bg-[#E1EEBC]"></div>
              <div class="status-dot bg-[#67AE6E]"></div>
              <div class="status-dot bg-[#328E6E]"></div>
            </div>
          </div>
        </div>

        <div class="dot order-2 md:order-none"></div>

        <div class="timeline-content right order-3 md:order-none">
          <div class="flex justify-center md:justify-start md:hidden mb-3">
            <div class="flex gap-3">
              <div class="status-dot bg-[#E1EEBC]"></div>
              <div class="status-dot bg-[#67AE6E]"></div>
              <div class="status-dot bg-[#328E6E]"></div>
            </div>
          </div>
          <h3 class="title hidden md:block">4. Warga Memantau Status</h3>
          <p class="desc hidden md:block">
            Warga dapat memantau perkembangan laporan secara berkala.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline-item {
  position: relative;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 12px;
}

@media (min-width: 768px) {
  .timeline-item {
    flex-direction: row;
    align-items: center;
    text-align: left;
    padding: 35px 0;
    gap: 0;
  }
}

.timeline-content {
  width: 100%;
}

@media (min-width: 768px) {
  .timeline-content.left {
    width: 50%;
    padding-right: 30px;
    text-align: right;
  }

  .timeline-content.right {
    width: 50%;
    padding-left: 30px;
    text-align: left;
  }
}

.dot {
  width: 34px;
  height: 34px;
  border-radius: 9999px;
  background: white;
  border: 4px solid #67ae6e;
  margin: 0 auto;
  z-index: 20;
  flex-shrink: 0;
}

@media (min-width: 768px) {
  .dot {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
  }
}

.title {
  font-size: 1.25rem;
  font-weight: 700;
}

.desc {
  color: #555;
  font-size: 0.95rem;
  margin-top: 6px;
}

.icon-box {
  width: 70px;
  height: 70px;
  background: #e1eebc;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.icon-img {
  width: 38px;
  height: 38px;
}

.bubble {
  background: white;
  padding: 14px 18px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  max-width: 240px;
}

.status-dot {
  width: 22px;
  height: 22px;
  border-radius: 9999px;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.15);
}
</style>
