<script setup>
import InfoMaps from '@/components/InfoMaps.vue'
import { ref } from 'vue'

const showSuccess = ref(false)

const submitForm = (e) => {
  e.preventDefault()
  showSuccess.value = true
  e.target.reset()
}
</script>

<template>
  <section class="w-full min-h-screen bg-[#67AE6E] py-16 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-12">

    <div class="flex-1">
      <h1 class="text-4xl md:text-5xl font-bold text-white mb-5">
        Hubungi Kami
      </h1>

      <p class="text-white leading-relaxed mb-6 max-w-xl">
        CityWatch Balikpapan hadir untuk membantu masyarakat menemukan informasi kegiatan kota, layanan komunitas,
        serta program lingkungan dengan cepat dan mudah. Silakan hubungi kami jika Anda memiliki pertanyaan,
        masukan, atau ingin berkolaborasi dalam kegiatan masyarakat.
      </p>

      <p class="font-medium text-white flex items-center gap-2 mb-4">
        <img src="/gmail.png" alt="email icon" class="w-6 h-6" />
        citywatchbalikpapan@gmail.com
      </p>

      <p class="font-medium text-white mb-10 flex items-center gap-2">
        <img src="/phone.png" alt="phone icon" class="w-6 h-6" />
        0812-3456-7890
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        
        <div>
          <h3 class="font-bold text-white mb-2">Dukungan Pengguna</h3>
          <p class="text-white text-sm leading-relaxed">
            Tim kami siap membantu Anda terkait informasi acara, laporan kendala,
            atau pertanyaan seputar penggunaan platform CityWatch.
          </p>
        </div>

        <div>
          <h3 class="font-bold text-white mb-2">Saran & Masukan</h3>
          <p class="text-white text-sm leading-relaxed">
            Kami sangat menghargai setiap saran yang Anda berikan. Masukan Anda
            membantu kami meningkatkan kualitas layanan CityWatch.
          </p>
        </div>

        <div>
          <h3 class="font-bold text-white mb-2">Media & Kolaborasi</h3>
          <p class="text-white text-sm leading-relaxed">
            Untuk kerja sama komunitas atau publikasi media, hubungi kami melalui:  
            <br />
            <span class="font-medium">media@citywatch.id</span>
          </p>
        </div>

      </div>
    </div>

    <div class="w-full lg:w-[420px] bg-white rounded-2xl shadow-lg p-8 h-fit border border-[#E1EEBC] animate-fadeIn">
      
      <h2 class="text-2xl font-bold text-[#1F2F28] mb-2">Hubungi Kami</h2>
      <p class="text-gray-600 text-sm mb-6">Kami akan menghubungi Anda secepatnya</p>

      <form class="cw-form" @submit="submitForm">

        <div class="cw-form-group">
          <label>Nama lengkap</label>
          <input type="text" placeholder="Masukkan nama Anda" />
        </div>

        <div class="cw-form-group">
          <label>Email Anda</label>
          <input type="email" placeholder="Masukkan email Anda" />
        </div>

        <div class="cw-form-group">
          <label>Nomor telepon</label>
          <input type="text" placeholder="Masukkan nomor telepon" />
        </div>

        <div class="cw-form-group">
          <label>Apa yang bisa kami bantu?</label>
          <textarea rows="3" placeholder="Tuliskan pesan Anda..."></textarea>
        </div>

        <button class="cw-submit-btn" type="submit">Kirim</button>

      </form>
    </div>

  </section>

  <InfoMaps />

  <div
    v-if="showSuccess"
    class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
  >
    <div class="bg-white w-[90%] max-w-md rounded-3xl p-8 text-center shadow-xl">
      
      <div class="w-12 h-12 bg-[#E1EEBC] rounded-full flex items-center justify-center mx-auto mb-4">
        <img src="/check.png" alt="Success" class="w-7 h-7">
      </div>

      <h2 class="text-2xl font-bold text-[#1F2F28] mb-2">
        Pesan Berhasil Dikirim!
      </h2>

      <p class="text-gray-600 text-sm mb-6">
        Terima kasih telah menghubungi tim CityWatch Balikpapan.
        Kami akan meninjau pesan Anda dan memberikan tanggapan secepatnya.
      </p>

      <button
        @click="showSuccess = false"
        class="w-full bg-[#67AE6E] hover:bg-[#4f9559] text-white font-semibold py-3 rounded-full transition"
      >
        Tutup
      </button>

      <button
        @click="$router.push('/')"
        class="mt-4 text-gray-500 text-sm hover:text-gray-700"
      >
        ← Kembali ke Beranda
      </button>

    </div>
  </div>
</template>

<style scoped>
.cw-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.cw-form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.cw-form-group label {
  font-weight: 600;
  font-size: 14px;
  color: #1F2F28;
}

.cw-form-group input,
.cw-form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1.5px solid #d6d6d6;
  transition: 0.2s ease;
}

.cw-form-group input:focus,
.cw-form-group textarea:focus {
  outline: none;
  border-color: #328E6E;
  box-shadow: 0 0 0 3px rgba(50, 142, 110, 0.18);
}

.cw-submit-btn {
  width: 100%;
  padding: 14px;
  border-radius: 8px;
  background-color: #328E6E;
  color: white;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: 0.2s ease;
}

.cw-submit-btn:hover {
  background-color: #26765A;
}

.cw-submit-btn:active {
  transform: scale(0.96);
}
</style>
