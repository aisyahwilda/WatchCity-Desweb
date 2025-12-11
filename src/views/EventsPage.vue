<script setup>
import { ref, computed } from 'vue'
import EventCard from '@/components/EventCard.vue'
import EventFilter from '@/components/EventFilter.vue'
import GaleriSection from '@/components/GaleriSection.vue'
import DetailEvent from '@/components/DetailEvent.vue'

const categories = [
  'Semua',
  'Kebersihan & Lingkungan',
  'Kesehatan & Olahraga',
  'Komunitas & Sosial',
  'Budaya & Festival',
  'Lingkungan Hidup',
  'Pendidikan & Anak',
]

const selected = ref('Semua')
const showDetail = ref(false)
const detailData = ref(null)

const events = [
  {
    id: 1,
    image: 'bersih.jpg',
    title: 'Festival Kebersihan Balikpapan',
    date: '25 Oktober 2025',
    locationName: 'Lapangan Merdeka, Balikpapan',
    locationUrl: 'https://maps.google.com/?q=Lapangan+Merdeka+Balikpapan',
    description:
      'Festival Kebersihan Balikpapan merupakan kegiatan tahunan yang mengajak seluruh warga untuk berpartisipasi dalam menjaga kebersihan dan keindahan lingkungan kota. Tahun ini, acara akan menghadirkan berbagai kegiatan seperti lomba kebersiha antar-kelurahan, kampanye pengelolaan sampah, hingga edukasi daur ulang untuk anak-anak sekolah. Selain itu, akan ada bazar produk ramah lingkungan dari berbagai komunitas lokal.',
    category: 'Kebersihan & Lingkungan',
    tags: ['Akan Datang', 'Gratis', 'Kebersihan & Lingkungan'],
    time: '08.00 - 16.00 WITA',
    goals: [
      'Mendorong partisipasi warga dalam menjaga lingkungan.',
      'Mengedukasi masyarakat soal daur ulang dan pengelolaan sampah.',
      'Membangun kebiasaan hidup bersih dan sehat.',
    ],
    activities: [
      'Lomba kebersihan antar-kelurahan.',
      'Workshop daur ulang untuk anak sekolah.',
      'Bazar produk ramah lingkungan dari komunitas lokal.',
      'Penyuluhan “Balikpapan Bebas Sampah 2030”.',
      'Pertunjukan musik & hiburan keluarga.',
    ],
    audience: 'Seluruh warga Balikpapan, pelajar, komunitas lingkungan, dan UMKM lokal.',
    facilities: ['Tempat sampah terpilah', 'Tempat duduk umum', 'Stand UMKM', 'Area edukasi anak'],
    note: 'Acara gratis dan terbuka untuk umum.',
  },
  {
    id: 2,
    image: 'lari.jpg',
    title: 'Car Free Day Balikpapan',
    date: '10 November 2025',
    locationName: 'Jl. Jenderal Sudirman, Balikpapan',
    locationUrl: 'https://maps.google.com/?q=Jl.+Jenderal+Sudirman+Balikpapan',
    description:
      'Kegiatan mingguan di Jalan Jenderal Sudirman yang menghadirkan ruang bebas kendaraan untuk olahraga dan aktivitas keluarga.',
    category: 'Kesehatan & Olahraga',
    tags: ['Olahraga'],
    time: '06.00 - 10.00 WITA',
    goals: [
      'Meningkatkan kebugaran masyarakat.',
      'Mengurangi polusi udara.',
      'Memberikan ruang interaksi publik setiap minggu.',
    ],
    activities: [
      'Senam massal bersama instruktur.',
      'Lari pagi & bersepeda.',
      'Zona kuliner sehat UMKM.',
      'Panggung hiburan rakyat.',
      'Layanan publik (dokumen, sosialisasi kesehatan, dll.).',
    ],
    audience: 'Semua usia: keluarga, komunitas olahraga, anak muda, pekerja kota.',
    facilities: ['Area olahraga', 'Panggung utama', 'Stand UMKM', 'Pos kesehatan'],
    note: 'Disarankan membawa botol minum dan datang sebelum pukul 07.00.',
  },
  {
    id: 3,
    image: 'sosial.jpeg',
    title: 'Bakti Sosial Hari Ibu – Salimah & IZI Balikpapan',
    date: '10 Mei 2025',
    locationName: 'Kelurahan Lamaru, Balikpapan Timur',
    locationUrl:
      'https://maps.google.com/?q=/Lamaru,+Balikpapan+Timur,+Balikpapan+City,+East+Kalimantan',
    description:
      'Program sosial dalam rangka Hari Ibu yang berfokus pada pemberdayaan perempuan dan dukungan untuk keluarga kurang mampu.',
    category: 'Komunitas & Sosial',
    tags: ['Komunitas & Sosial', 'Bakti Sosial'],
    time: '08.00 - 14.00 WITA',
    goals: [
      'Meringankan kebutuhan warga dhuafa.',
      'Memberikan layanan kesehatan gratis untuk lansia dan ibu rumah tangga.',
      'Menumbuhkan solidaritas sosial.',
    ],
    activities: [
      'Pembagian santunan untuk lansia & dhuafa.',
      'Pemeriksaan kesehatan gratis (door to door).',
      'Bazar sembako murah.',
      'Pembagian pakaian layak pakai.',
      'Sesi edukasi keluarga & parenting islami.',
    ],
    audience: 'Warga dhuafa, lansia, ibu rumah tangga, dan keluarga di Kelurahan Lamaru.',
    facilities: ['Layanan kesehatan', 'Konsultasi keluarga', 'Area bazar', 'Pos logistik'],
    note: 'Utamakan peserta lansia & ibu rumah tangga sesuai tema.',
  },
  {
    id: 4,
    image: 'festival.png',
    title: 'Festival Seni & Budaya Balikpapan 2025',
    date: '15 Juli 2025',
    locationName: 'Taman Bekapai',
    locationUrl: 'https://maps.google.com/?q=Taman+Bekapai',
    description:
      'Perayaan budaya terbesar di Balikpapan yang menampilkan beragam seni tradisional dan modern.',
    tags: ['Festival', 'Budaya', 'Gratis'],
    category: 'Budaya & Festival',
    time: '10.00 - 21.00 WITA',
    goals: [
      'Melestarikan budaya lokal.',
      'Memberi ruang bagi seniman lokal.',
      'Mendorong pertumbuhan UMKM kreatif.',
    ],
    activities: [
      'Tarian adat Kalimantan Timur.',
      'Pameran UMKM & kerajinan tangan.',
      'Pertunjukan musik tradisional dan modern.',
      'Stand kuliner lokal.',
      'Workshop seni (batik, tari, ukir).',
    ],
    audience: 'Keluarga, pelajar, wisatawan lokal, pecinta seni dan budaya.',
    facilities: ['Area pameran', 'Area kuliner', 'Spot foto budaya', 'Panggung pertunjukan'],
    note: 'Dianjurkan memakai batik atau pakaian tradisional.',
  },
  {
    id: 5,
    image: 'lingkungan.jpg',
    title: 'Semarak Hari Bumi 2025 — Balikpapan Bersih & Hijau',
    date: '20 September 2025',
    locationName: 'Hall Madinah SIT Istiqamah YPAIT Balikpapan',
    locationUrl: 'https://maps.google.com/?q=SDIT+Istiqamah+BALIKPAPAN',
    description:
      'Peringatan Hari Bumi yang mendorong warga menjaga lingkungan dan kelestarian alam.',
    tags: ['Lingkungan Hidup', 'Publik', 'Gratis'],
    category: 'Lingkungan Hidup',
    time: '08.00 - 15.00 WITA',
    goals: [
      'Mengedukasi masyarakat tentang pentingnya menjaga bumi.',
      'Menumbuhkan kebiasaan ramah lingkungan.',
      'Mengajak warga menanam pohon dan mengurangi sampah.',
    ],
    activities: [
      'Sosialisasi kebersihan lingkungan.',
      'Edukasi pelestarian hutan & pengurangan sampah plastik.',
      'Aksi tanam pohon bersama.',
      'Workshop eco-living untuk keluarga.',
      'Lomba poster peduli lingkungan untuk anak.',
    ],
    audience: 'Pelajar, keluarga, komunitas lingkungan, dan masyarakat umum.',
    facilities: [
      'Area workshop',
      'Bibit tanaman gratis',
      'Stand edukasi lingkungan',
      'Area diskusi komunitas',
    ],
    note: 'Bawa botol minum dan sarung tangan pribadi.',
  },
  {
    id: 6,
    image: 'anak.jpeg',
    title: 'Peringatan Hari Anak Nasional 2025',
    date: '23 Juli 2025',
    locationName: 'Halaman Kantor Wali Kota Balikpapan',
    locationUrl: 'https://maps.google.com/?q=Balikpapan+Kantor+Wali+Kota',
    description:
      'Perayaan Hari Anak Nasional yang menghadirkan edukasi, permainan, dan pertunjukan kreatif untuk anak-anak Balikpapan.',
    tags: ['Pendidikan & Anak', 'Komunitas & Sosial', 'Gratis'],
    category: 'Pendidikan & Anak',
    time: '08.00 - 14.00 WITA',
    goals: [
      'Mendukung perkembangan kreativitas anak.',
      'Meningkatkan kesadaran orang tua tentang hak anak.',
      'Membuat ruang bermain yang sehat dan aman.',
    ],
    activities: [
      'Pentas seni anak PAUD–SLB.',
      'Permainan tradisional nusantara.',
      'Dongeng interaktif.',
      'Edukasi hak anak & perlindungan.',
      'Zona kreativitas: mewarnai, puzzle, dan kerajinan.',
    ],
    audience: 'Anak usia 3–15 tahun, orang tua, guru, dan keluarga.',
    facilities: ['Tenda permainan', 'Zona aman anak', 'Tempat duduk keluarga', 'Photobooth'],
    note: 'Pastikan anak berada dalam pengawasan orang tua.',
  },
]

const filteredEvents = computed(() => {
  if (selected.value === 'Semua') return events
  return events.filter((ev) => ev.category === selected.value)
})

const openDetail = (ev) => {
  detailData.value = ev
  showDetail.value = true
}

const closeDetail = () => {
  showDetail.value = false
  detailData.value = null
}
</script>

<template>
  <div class="pt-[25px] pb-10 max-w-6xl mx-auto px-4 space-y-6">
    <div class="text-center max-w-3xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold text-[#1F2F28] leading-normal">
        Kembangkan Relasi & Wawasan <br />
        Melalui Berbagai Kegiatan Kami
      </h1>

      <p class="text-lg md:text-xl text-[#1F2F28] mt-6">
        Temukan beragam kegiatan bermanfaat yang berlangsung di Kota Balikpapan.
      </p>
    </div>

    <EventFilter
      :selected="selected"
      :categories="categories"
      @update:selected="selected = $event"
    />

    <div class="space-y-6">
      <EventCard
        v-for="ev in filteredEvents"
        :key="ev.title"
        v-bind="ev"
        @view-detail="openDetail"
      />
    </div>

    <GaleriSection v-if="selected === 'Semua'" />

    <DetailEvent v-if="showDetail" v-bind="detailData" @close="closeDetail" />
  </div>
</template>
