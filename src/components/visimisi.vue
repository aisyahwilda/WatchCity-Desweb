<template>
  <section class="w-full bg-white py-14 px-4 sm:px-6">

    <div class="max-w-5xl mx-auto border-b pb-10">
      <div class="flex items-start gap-6">
        
        <div>
          <h3 class="text-xl sm:text-2xl font-semibold text-gray-900">Visi CityWatch</h3>
          <p class="mt-2 text-slate-600 leading-relaxed max-w-3xl">
            Mendukung terwujudnya Balikpapan sebagai Smart City yang melibatkan masyarakat secara aktif
            dalam menjaga kebersihan, keamanan, dan kenyamanan kota.
          </p>
        </div>
      </div>
    </div>

    <div class="max-w-5xl mx-auto mt-12">

      <div class="flex items-start gap-6 mb-6">
        <h3 class="text-xl sm:text-2xl font-semibold text-gray-900">
          Misi CityWatch
        </h3>
      </div>

      <div class="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">

        <div class="mission-card">
          <div class="icon-wrap">
            <div class="icon-circle">
                <img 
                src="/report.png"
                alt="Report Icon"
                class="icon-img"
                />
            </div>
        </div>
          <h4 class="mt-4 font-semibold text-gray-800">Pelaporan Mudah</h4>
          <p class="text-sm mt-1 text-slate-600">
            Mempermudah warga dalam melaporkan masalah fasilitas umum.
          </p>
        </div>

        <div class="mission-card">
          <div class="icon-wrap">
            <div class="icon-circle">
                <img 
                src="/inter.png"
                alt="Informasi Terbuka Icon"
                class="icon-img"
                />
            </div>
          </div>
          <h4 class="mt-4 font-semibold text-gray-800">Informasi Terbuka</h4>
          <p class="text-sm mt-1 text-slate-600">
            Menyediakan informasi kebersihan dan layanan kota secara transparan.
          </p>
        </div>

        <div class="mission-card">
          <div class="icon-wrap">
            <div class="icon-circle">
                <img 
                src="/pusat.png"
                alt="Pusat Icon"
                class="icon-img"
                />
            </div>
          </div>
          <h4 class="mt-4 font-semibold text-gray-800">Informasi Terpusat</h4>
          <p class="text-sm mt-1 text-slate-600">
            Menghadirkan pengumuman dan kegiatan kota dalam satu halaman yang mudah diakses.
          </p>
        </div>

        <div class="mission-card">
          <div class="icon-wrap">
            <div class="icon-circle">
                <img 
                src="/collab.png"
                alt="Kolaborasi Icon"
                class="icon-img"
                />
            </div>
          </div>
          <h4 class="mt-4 font-semibold text-gray-800">Kolaborasi</h4>
          <p class="text-sm mt-1 text-slate-600">
            Meningkatkan kolaborasi antara pemerintah dan masyarakat.
          </p>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup></script>

<style scoped>
.mission-card {
  min-width: 230px;
  max-width: 250px;
  padding: 18px;
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: 0.2s ease;
}

.mission-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
}

.icon-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-circle {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #E1EEBC, #67AE6E);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 6px 12px rgba(0,0,0,0.12);
  transition: 0.25s ease;
}

.icon-img {
  width: 34px;
  height: 34px;
  object-fit: contain;
  transition: 0.25s ease;
}

.mission-card:hover .icon-circle {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.18);
}

.mission-card:hover .icon-img {
  transform: scale(1.1);
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
