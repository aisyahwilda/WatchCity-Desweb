file actioncard.vue
<template>
  <section class="w-full py-1 px-6"> mendukung resposif agar lebarnya 100% mengkuti skala layar dan padding horizontal yang mengikuti layar
    <div class="max-w-3xl mx-auto grid md:grid-cols-2 gap-8"> disini adalah letak responsifnya jadi kalo di mobil itu dia 1 kolom kalo di dekstop atau tablet dia 2 kolom. responsifya dibagian md:grid-cols-2

      <div class="rounded-2xl shadow-xl overflow-hidden bg-white"> overflow hidden itu supaya isi card tidak boleh keluar dari border bulat
        <div
          class="h-28 bg-gradient-to-b from-[#90C67C] to-[#67AE6E] flex items-center justify-center"
        > gradient-to-b itu supaya gradient nya dari atas kw bawah
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
      inline-block itu agar bisa diberi margin dan padding

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

file carakerja.vue
<template>
  <section class="w-full bg-white py-16 px-4 sm:px-6">
  responsifnya ada di px-4 san sm:px-6 jadi gak terlalu kecil jaraknya di layar dekstop

    <div class="max-w-5xl mx-auto text-center mb-14">
      <h2 class="text-3xl sm:text-4xl font-black text-gray-900">How CityWatch Works</h2>
      letak responsifnya ada si sm:text-4xl
      mx-auto agar grid ada ditengah halaman

      <div class="mt-3 flex justify-center"> 
        <span
          class="inline-block h-1 w-28 rounded-full bg-gradient-to-r 
                     from-[#328E6E] via-[#67AE6E] to-[#E1EEBC]"> bg-gradient-to-r gradasi dari kiri ke kanan
        </span>
      </div>

      <p class="mt-4 text-slate-600 max-w-2xl mx-auto">
        Proses cepat dan transparan untuk membantu warga melaporkan fasilitas umum yang bermasalah.
      </p>
    </div>

    <div class="relative max-w-4xl mx-auto">
    ini itu membungkus seluruh timeline agar ketengah, lebarnya dibatasin jadi max-w-4xl dan posisi absolute disetiap elemen
    setiap ada relative itu bakal ada absolute jadi relative kayak parentnya yang jadi patokan nah absolute ini bakal nempel ke relative

      <div
        class="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[3px] z-0
               bg-gradient-to-b from-[#328E6E] via-[#67AE6E] to-[#E1EEBC]">
      </div>
      left 1/2 itu di posisi horizontal dia  jadi 50% dan -translate-x-1/2 itu digeseer biar bener bener center
      h-full itu tinggi mengikuti parent
      w-[3px] itu lebar garis 3 piksel
      bg.. gradasi dari atas ke bawah


      <div class="relative flex md:flex-row flex-col items-center mb-20"> ini membuat responsif
      flex-col itu biar default mobil layout jadi elemen bertumpuk gituu
      md:flex-row agar elemennya sejajar kiri kanan
      mb-20 itu jarak antara step timeline
      JADI INTINYA DIA KALO MOBILE VERTIKAL KALO DEKSTOP JADI HORIZONTAL

        <div class="w-full md:w-1/2 md:pr-10 text-center md:text-right">
        w-full: kalo dimobile lebarnya penuh
        md:w-1/2: kalo di dekstop lebarnya dibagi 2
          <h3 class="text-xl font-semibold text-gray-800">1. Isi Formulir Laporan</h3>
          <p class="mt-2 text-slate-600">
            Masukkan nama lengkap, lokasi, tanggal, kategori masalah, deskripsi, dan unggah foto.
          </p>
        </div>

        <div class="dot"></div>

        <div class="w-full md:w-1/2 md:pl-10 flex justify-center md:justify-start mt-6 md:mt-0"> resposif iconnya 
          <div class="icon-box">
            <img src="/report.png" alt="Form Icon" class="icon-img">
          </div>
        </div>

      </div>


      <div class="relative flex md:flex-row flex-col items-center mb-20">

        <div class="w-full md:w-1/2 md:pr-10 flex justify-center md:justify-end mb-6 md:mb-0">
          <div class="bubble">Laporan berhasil terkirim dan masuk ke sistem.</div>
        </div>

        <div class="dot"></div>

        <div class="w-full md:w-1/2 md:pl-10 text-center md:text-left">
          <h3 class="text-xl font-semibold text-gray-800">2. Laporan Berhasil Dikirim</h3>
          <p class="mt-2 text-slate-600">
            Laporan langsung tampil di tabel daftar laporan sebagai bukti transparansi.
          </p>
        </div>

      </div>


      <div class="relative flex md:flex-row flex-col items-center mb-20">

        <div class="w-full md:w-1/2 md:pr-10 text-center md:text-right">
          <h3 class="text-xl font-semibold text-gray-800">3. Laporan Diproses Admin</h3>
          <p class="mt-2 text-slate-600">
            Admin meninjau laporan dan mengubah status menjadi Menunggu, Diproses, atau Selesai.
          </p>
        </div>

        <div class="dot"></div>

        <div class="w-full md:w-1/2 md:pl-10">
          <div class="bubble">“Status laporan kamu kini <b>Diproses</b>.”</div>
        </div>

      </div>


      <div class="relative flex md:flex-row flex-col items-center">

        <div class="w-full md:w-1/2 md:pr-10 flex justify-center md:justify-end mb-6 md:mb-0">
          <div class="flex gap-4">
            <div class="status-dot bg-[#E1EEBC]"></div>
            <div class="status-dot bg-[#67AE6E]"></div>
            <div class="status-dot bg-[#328E6E]"></div>
          </div>
        </div>

        <div class="dot"></div>

        <div class="w-full md:w-1/2 md:pl-10 text-center md:text-left">
          <h3 class="text-xl font-semibold text-gray-800">4. Warga Memantau Status</h3>
          <p class="mt-2 text-slate-600">
            Warga bisa memonitor status laporan secara real-time di halaman Reports.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>


<style>
.dot {
  width: 40px;
  height: 40px;
  background: white;
  border: 4px solid #67AE6E;
  border-radius: 999px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  z-index: 30;
}

.icon-box {
  width: 70px;
  height: 70px;
  background: #E1EEBC;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 6px 12px rgba(0,0,0,0.12);
}

.icon-img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.bubble {
  background: white;
  padding: 12px 18px;
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  max-width: 220px;
  font-size: 14px;
  color: #333;
}

.status-dot {
  width: 22px;
  height: 22px;
  border-radius: 999px;
  box-shadow: inset 0 3px 6px rgba(0,0,0,0.15);
}
</style>

FILE CITY INFO
<template>
  <section class="w-full bg-white py-10 sm:py-12 md:py-16 px-4 sm:px-6"> responsifnya disini jadi kalo di hp paddingnya kecil, terus kalo di tablet paddingnya makin lebar dan di dekstop makin lebar lagi
    <div class="max-w-7xl mx-auto">
      <h2
        class="text-2xl sm:text-3xl md:text-4xl font-black text-gray-800 uppercase mb-6 sm:mb-8 md:mb-10 text-center"
      >
        Kondisi Kota Balikpapan Hari Ini
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
      grid-cols-1 jadi kalo di hp itu kolom aja, terus kalo 
      lg:grid-cols-3 layarnya mulai lebar dia jadi 3 kolom
      md:gap-8 jarak antar kolomnya membesar saat layar medium
        <div class="weather-card">
          <div class="weather-container">
            <div class="sun"></div>
            <div class="sun sunshine"></div>

            <div class="cloud front">
              <span class="left-front"></span>
              <span class="right-front"></span>
            </div>
            <div class="cloud back">
              <span class="left-back"></span>
              <span class="right-back"></span>
            </div>
          </div>

          <div class="card-header">
            <span>Balikpapan, Indonesia</span>
            <span>26 November 2025</span>
          </div>

          <div class="temp">31°</div>
          <div class="temp-scale">
            <span>Celcius</span>
          </div>
        </div>

        <div class="lg:col-span-2 space-y-4 sm:space-y-5"> ini buat responsif spacing pengumuman
          <div class="bg-white rounded-2xl shadow-lg p-4 sm:p-5"> ini buat card pengumuman responsif
            <h3 class="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <svg class="w-6 h-6 text-[#328E6E]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                ></path>
              </svg>
              Pengumuman Hari Ini
            </h3>

            <div
              class="flex items-start gap-4 sm:gap-5 bg-gradient-to-r from-[#328E6E] to-[#67AE6E] text-white px-4 sm:px-6 py-4 sm:py-5 rounded-2xl shadow-md mb-4 transform hover:scale-[1.02] transition-transform duration-200"
            > responsif isi pengumuman
              <div
                class="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
              >
              ikon responsif
              jadi flex-shrink-0 ini gunanya supaya tidak mengecil banget 
                <svg class="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div class="flex-1">
                <p class="font-bold text-base sm:text-lg mb-1">Pengumuman:</p>
                <p class="text-sm sm:text-base leading-relaxed">
                  Perbaikan jalan di Jl. MT Haryono berlangsung 20–22 Oktober 2025.
                </p>
              </div>
            </div>

            <div
              class="flex items-start gap-4 sm:gap-5 bg-gradient-to-r from-[#67AE6E] to-[#90C67C] text-white px-4 sm:px-6 py-4 sm:py-5 rounded-2xl shadow-md mb-4 transform hover:scale-[1.02] transition-transform duration-200"
            >
              <div
                class="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
              >
                <svg class="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd" untuk mengatur bagian mana yang bertumpuk diisi warna
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div class="flex-1">
                <p class="font-bold text-base sm:text-lg mb-1">Jadwal Pengangkutan Sampah:</p>
                <p class="text-sm sm:text-base leading-relaxed">Senin–Kamis, pukul 07.00 WITA.</p>
              </div>
            </div>

            <div
              class="flex items-start gap-4 sm:gap-5 bg-gradient-to-r from-[#90C67C] to-[#E1EEBC] text-gray-800 px-4 sm:px-6 py-4 sm:py-5 rounded-2xl shadow-md transform hover:scale-[1.02] transition-transform duration-200"
            >
              <div
                class="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-white/40 rounded-xl flex items-center justify-center backdrop-blur-sm"
              >
                <svg class="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"
                  ></path>
                </svg>
              </div>
              <div class="flex-1">
                <p class="font-bold text-base sm:text-lg mb-1">Energi Ramah Lingkungan:</p>
                <p class="text-sm sm:text-base leading-relaxed">
                  30% penerangan jalan kini menggunakan lampu LED hemat energi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.weather-card {
  width: 100%; mengikuti lebar layar jadi responsif
  max-width: 350px; kartu tidak akan melebar lebih dari 350px
  height: 235px; tingginya tetap
  position: relative; 
  padding: 25px;
  background:
    radial-gradient(178.94% 106.41% at 26.42% 106.41%, #e1eebc 0%, rgba(255, 255, 255, 0) 71.88%),
    #ffffff;
  box-shadow:
    0px 155px 62px rgba(0, 0, 0, 0.01),
    0px 87px 52px rgba(0, 0, 0, 0.05),
    0px 39px 39px rgba(0, 0, 0, 0.09),
    0px 10px 21px rgba(0, 0, 0, 0.1),
    0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 23px;
  transition: all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1);
  cursor: pointer;
  margin: 0 auto;
}

.weather-card:hover {
  transform: scale(1.05);
}
saat kurson diarahkan kartu membesar 5%

.weather-container {
  width: 250px;
  height: 250px;
  position: absolute;
  right: -35px;
  top: -50px;
  display: flex; memudahkan mengatur posisi awan dan matahari
  align-items: center;
  justify-content: center;
  transform: scale(0.7);
}
posisi absolute maksudnya diletakkan bebas didalam weather card

.cloud {
  width: 250px;
}

.front {
  padding-top: 45px;
  margin-left: 25px;
  display: inline;
  position: absolute;
  z-index: 11; mengatur mana yang lebih depan
  animation: clouds 8s infinite;
  animation-timing-function: ease-in-out;
}

.back {
  margin-top: -30px;
  margin-left: 150px;
  z-index: 12;
  animation: clouds 12s infinite;
  animation-timing-function: ease-in-out;
}

.right-front {
  width: 45px;
  height: 45px;
  border-radius: 50% 50% 50% 0%; membentuk lengkungan seperti awan
  background-color: #4c9beb;
  display: inline-block;
  margin-left: -25px;
  z-index: 5;
}
awan itu dibentuk dari lingkaran yang digabung 

.left-front {
  width: 65px;
  height: 65px;
  border-radius: 50% 50% 0% 50%;
  background-color: #4c9beb;
  display: inline-block;
  z-index: 5;
}

.right-back {
  width: 50px;
  height: 50px;
  border-radius: 50% 50% 50% 0%;
  background-color: #4c9beb;
  display: inline-block;
  margin-left: -20px;
  z-index: 5;
}

.left-back {
  width: 30px;
  height: 30px;
  border-radius: 50% 50% 0% 50%;
  background-color: #4c9beb;
  display: inline-block;
  z-index: 5;
}

.sun {
  width: 120px;
  height: 120px;
  background: linear-gradient(to right, #fcbb04, #fffc00);
  border-radius: 60px;
  display: inline;
  position: absolute;
}

.sunshine {
  animation: sunshines 2s infinite;
}

@keyframes sunshines {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }

  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}
sinar matahari bakal membesar dan menghilang (looping)

@keyframes clouds {
  0% {
    transform: translateX(15px);
  }

  50% {
    transform: translateX(0px);
  }

  100% {
    transform: translateX(15px);
  }
}
awan bakal gerak kanan kiri 

.card-header {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-header span:first-child {
  word-break: break-all;
  font-weight: 800;
  font-size: 15px;
  line-height: 135%;
  color: rgba(87, 77, 51, 0.66);
}

.card-header span:last-child {
  font-weight: 700;
  font-size: 15px;
  line-height: 135%;
  color: rgba(87, 77, 51, 0.33);
}

.temp {
  position: absolute;
  left: 25px;
  bottom: 12px;
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;
  color: rgba(87, 77, 51, 1);
}

.temp-scale {
  width: 80px;
  height: 36px;
  position: absolute;
  right: 25px;
  bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.06);
  border-radius: 9px;
}

.temp-scale span {
  font-weight: 700;
  font-size: 13px;
  line-height: 134.49%;
  color: rgba(87, 77, 51, 0.66);
}
</style>

FILE CARA KERJA
<template>
  <section class="w-full bg-white py-16 px-4 sm:px-6">
    <!-- TITLE -->
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

    <!-- TIMELINE -->
    <div class="relative max-w-4xl mx-auto">
      <!-- GARIS - hidden on mobile/tablet, visible on desktop -->
      <div
        class="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[3px] bg-gradient-to-b from-[#328E6E] via-[#67AE6E] to-[#E1EEBC] z-0"
      ></div> 
      hidden disini fungsinya untuk garisnya hilang waktu tampilan mobile nah kalo di dekstop mucul garisny

      <!-- 1 -->
      <div class="timeline-item">
        <div class="timeline-content left order-1 md:order-none">
        order -1 maksudnya konten teks bakal muncul duluan dan md:order-none itu kembali ke urutan normal (kanan dan kiri)
          <h3 class="title">1. Isi Formulir Laporan</h3>
          <p class="desc">Masukkan nama, lokasi, kategori, tanggal, dan foto.</p>
        </div>

        <div class="dot order-2 md:order-none"></div>

        <div
          class="timeline-content right flex justify-center md:justify-start order-3 md:order-none"
        >
        justify-center itu ditengah kalo di mobile nah kalo md:justify-start itu dipindah kekiri kalo dekstop
          <div class="icon-box">
            <img src="/report.png" class="icon-img" />
          </div>
        </div>
      </div>

      <!-- 2 -->
      <div class="timeline-item">
        <div class="timeline-content left order-1 md:order-none">
          <h3 class="title md:hidden">2. Laporan Berhasil Dikirim</h3>
          md:hidden itu nanti kalo dimobile bakal tampil sedangkan didekstop bakal disembunyikan
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
      hidden md:block itu di dekstop ditampilkan dimobile disembuyikan

      <!-- 3 -->
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

      <!-- 4 -->
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
mengubah timeline dari kolom jadi baris, jadi kalo mobile dia bentuknya vertikal dan kalo dekstop jadi horizontal (kanan tengah kiri)

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
mengatur posisi konten, kalo mobile semua teks ditengahh dan kalo dekstop dia kiri kanan

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
dotnya berasa ditengah antar item di mobile kalo didekstop dia ditengah garis vertikal

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
