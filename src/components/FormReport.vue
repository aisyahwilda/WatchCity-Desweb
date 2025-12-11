<script setup>
import { ref } from "vue";

const reports = ref([]);

const showSuccess = ref(false);

const form = ref({
  nama: "",
  lokasi: "",
  tanggal: "",
  kategori: "",
  deskripsi: "",
  foto: null
});


const submitReport = () => {
  if (!form.value.nama || !form.value.lokasi || !form.value.tanggal || !form.value.kategori) {
    alert("Harap isi semua kolom penting.");
    return;
  }

  const d = new Date(form.value.tanggal);
  const formattedDate = d.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  reports.value.unshift({
    tanggal: formattedDate,
    lokasi: form.value.lokasi,
    jenis: form.value.kategori,
    status: "Menunggu"
  });


  form.value = {
    nama: "",
    lokasi: "",
    tanggal: "",
    kategori: "",
    deskripsi: "",
    foto: null
  };

  showSuccess.value = true;
};
</script>

<template>
  <section class="w-full bg-white pt-[25px] pb-12 px-4 sm:px-6">
    <h1 class="text-3xl sm:text-4xl font-black mb-10">
      LAPORKAN MASALAH FASILITAS UMUM
    </h1>

    <div class="cw-form-container mx-auto">
      <form class="cw-form" @submit.prevent="submitReport">

        <div class="cw-group">
          <label>Nama Lengkap</label>
          <input v-model="form.nama" type="text" placeholder="Masukkan nama lengkap" />
        </div>

        <div class="cw-group">
          <label>Lokasi Kejadian</label>
          <input v-model="form.lokasi" type="text" placeholder="Contoh: Jl. MT Haryono" />
        </div>

        <div class="cw-group">
          <label>Tanggal Kejadian</label>
          <input v-model="form.tanggal" type="date" />
        </div>

        <div class="cw-group">
          <label>Kategori Masalah</label>
          <input v-model="form.kategori" type="text" placeholder="Contoh: Lampu Jalan Mati" />
        </div>

        <div class="cw-group">
          <label>Deskripsi Masalah</label>
          <textarea v-model="form.deskripsi" placeholder="Jelaskan masalah yang terjadi..."></textarea>
        </div>

        <div class="cw-group">
          <label>Upload Foto</label>
          <input type="file" @change="e => form.foto = e.target.files[0]" class="cursor-pointer" />
        </div>

        <div class="cw-btn-wrapper">
          <button class="cw-submit-btn">KIRIM</button>
        </div>

      </form>
    </div>

    <h2 class="text-3xl font-black mt-16 mb-6">
      DAFTAR LAPORAN
    </h2>

    <p v-if="reports.length === 0" class="text-gray-500 italic">
      Belum ada laporan masuk.
    </p>

    <div v-else class="overflow-x-auto">
      <table class="w-full border-collapse text-center">
        <thead class="bg-[#E1EEBC] text-gray-700 font-semibold">
          <tr>
            <th class="td-head">Tanggal</th>
            <th class="td-head">Lokasi</th>
            <th class="td-head">Jenis Masalah</th>
            <th class="td-head">Status</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, index) in reports" :key="index"
              :class="index % 2 === 1 ? 'bg-[#E8F2C7]' : ''">
            <td class="td">{{ item.tanggal }}</td>
            <td class="td">{{ item.lokasi }}</td>
            <td class="td">{{ item.jenis }}</td>
            <td class="td">{{ item.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <div
    v-if="showSuccess"
    class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
  >
    <div class="bg-white w-[90%] max-w-lg rounded-3xl px-10 py-8 text-center shadow-xl animate-popup">

      <div class="w-14 h-14 bg-[#E1EEBC] rounded-full flex items-center justify-center mx-auto mb-5">
        <img src="/check.png" alt="Success" class="w-7 h-7">
      </div>

      <h2 class="text-2xl font-extrabold text-[#1F2F28] mb-2">
        Laporan Berhasil Dikirim!
      </h2>

      <p class="text-gray-600 text-sm mb-6">
        Terima kasih sudah berpartisipasi menjaga kota Balikpapan.
      </p>

      <button
        @click="showSuccess = false"
        class="w-full bg-[#90C67C] hover:bg-[#7CB368] text-white font-semibold py-3 rounded-full transition mb-4"
      >
        Tutup
      </button>

      <button
        @click="showSuccess = false"
        class="text-gray-500 text-sm hover:text-gray-700 flex items-center justify-center gap-1"
      >
        ← Lihat Laporan
      </button>

    </div>
  </div>
</template>

<style scoped>
@keyframes popFade {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
.animate-popup {
  animation: popFade 0.25s ease-out;
}

.cw-form-container {
  width: 100%;
  max-width: 650px;
  background: white padding-box,
    linear-gradient(135deg, #328e6e, #67ae6e, #e1eebc) border-box;
  border: 3px solid transparent;
  padding: 32px 26px;
  border-radius: 18px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.cw-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.cw-group label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #2a3c33;
  margin-bottom: 4px;
}

.cw-group input,
.cw-group textarea {
  width: 100%;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid #328e6e;
  background: #ffffff;
  font-size: 14px;
  color: #1f2f28;
  transition: 0.2s ease;
}

.cw-group textarea {
  resize: none;
  height: 110px;
}

.cw-group input::placeholder,
.cw-group textarea::placeholder {
  color: #3a5f4b;
  opacity: 0.5;
}

.cw-group input:focus,
.cw-group textarea:focus {
  outline: none;
  border-color: #67ae6e;
  box-shadow: 0 0 0 2px #e1eebc;
}

.cw-btn-wrapper {
  display: flex;
  justify-content: flex-end;
}

.cw-submit-btn {
  width: 45%;
  background: linear-gradient(to right, #67ae6e, #328e6e);
  padding: 12px 16px;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 8px;
  transition: 0.2s ease;
}

.td-head {
  @apply px-6 py-3 text-left;
}

.td {
  @apply px-6 py-2;
}
</style>
