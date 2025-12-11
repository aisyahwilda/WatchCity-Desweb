<template>
  <section class="w-full bg-white py-10 sm:py-12 md:py-16 px-4 sm:px-6">
    <div class="max-w-7xl mx-auto">
      <h2
        class="text-2xl sm:text-3xl md:text-4xl font-black text-gray-800 uppercase mb-6 sm:mb-8 md:mb-10 text-center"
      >
        Kondisi Kota Balikpapan Hari Ini
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
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

        <div class="lg:col-span-2 space-y-4 sm:space-y-5">
          <div class="bg-white rounded-2xl shadow-lg p-4 sm:p-5">
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
            >
              <div
                class="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
              >
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
                    fill-rule="evenodd"
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
  width: 100%;
  max-width: 350px;
  height: 235px;
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

.weather-container {
  width: 250px;
  height: 250px;
  position: absolute;
  right: -35px;
  top: -50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.7);
}

.cloud {
  width: 250px;
}

.front {
  padding-top: 45px;
  margin-left: 25px;
  display: inline;
  position: absolute;
  z-index: 11;
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
  border-radius: 50% 50% 50% 0%;
  background-color: #4c9beb;
  display: inline-block;
  margin-left: -25px;
  z-index: 5;
}

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
