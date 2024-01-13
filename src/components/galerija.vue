<template>
  <transition name="fade">
  <div v-if="loading" class="page-loader flex flex-col">
      <!-- Add your loading spinner or animation here -->
      <img src="/photos/newlogo-removedbg.png" alt="" class="w-[280px] pb-8">
      <div class="loader"></div>
    </div>
  </transition>
      <div class="text-center py-4 text-[#D2A44C] bg-black font-bold" style="font-size: calc(2vw + 1.5em);">
        GALERIJA
    </div>
    <div class="bg-black w-full flex justify-center items-center">
    <!-- Fullscreen Gallery -->
    <div v-if="fullscreenImage" class="fullscreen-gallery">
      <button @click="navigateFullscreen(-1)" class="nav-button left-button">Previous</button>
      <img loading="lazy" :src="`/photos_working/${fullscreenImage}`" alt="">
      <button @click="navigateFullscreen(1)" class="nav-button right-button">Next</button>
      <button @click="closeFullscreen" class="close-button">Close</button>
    </div>

    <!-- Original Gallery -->
    <div class="py-4">
      <swiper
        @swiperSlideChange="onSlideChange"
        class="flex justify-center items-center"
      >
      <div class="flex flex-wrap justify-center gap-[1em]">

      
        <swiper-slide v-for="(image, index) in images" :key="index" @click="openFullscreen(index)" class="!w-[200px] flex justify-center max-[420px]:!w-[280px]">
            <img :src="`/photos_working/${image}`" alt="" loading="lazy" class="w-[200px] h-[400px] object-cover max-[430px]:!w-[280px]">
        </swiper-slide>
      </div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  data(){return{
    loading: true,
  }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const images = [
      "photo1.webp",
      "photo2.webp",
      "photo3.webp",
      "photo4.webp",
      "photo5.webp",
      "photo6.webp",
      "photo7.webp",
      "photo8.webp",
      "photo9.webp",
      "photo10.webp",
      "photo11.webp",
      "photo12.webp",
      "photo13.webp",
      "photo14.webp",
      "photo15.webp",
      "photo16.webp",
      "photo17.webp"
    ];
    const fullscreenImage = ref(null);
    const fullscreenIndex = ref(0);

    const onSlideChange = (swiper) => {
      fullscreenIndex.value = swiper.activeIndex;
};

const openFullscreen = (index) => {
  fullscreenIndex.value = index;
  fullscreenImage.value = images[index];
};

const closeFullscreen = () => {
  fullscreenImage.value = null;
};
const navigateFullscreen = (direction) => {
      const newIndex = (fullscreenIndex.value + direction + images.length) % images.length;
      fullscreenIndex.value = newIndex;
      fullscreenImage.value = images[newIndex];
    };

return { fullscreenImage, images, onSlideChange, openFullscreen, closeFullscreen, navigateFullscreen };
  },
  mounted() {
    // Simulate a 2-second delay for demonstration purposes
    setTimeout(() => {
      this.loading = false; // Set loading state to false after 2 seconds
    }, 3000);
  },
};
</script>

<style scoped>
.fullscreen-gallery {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fullscreen-gallery img {
  max-width: 100%;
  max-height: 100%;
}

.fullscreen-gallery .nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.5);
  color: #000;
  padding: 10px;
  border: none;
  cursor: pointer;
}

.fullscreen-gallery .left-button {
  left: 10px;
}

.fullscreen-gallery .right-button {
  right: 10px;
}

.fullscreen-gallery .close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  color: #fff;
  cursor: pointer;
}
.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black; /* Semi-transparent white background */
  
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  z-index: 10000;
}
.loader {
  display: block;
  --height-of-loader: 4px;
  --loader-color: #D2A44C;
  width: 130px;
  height: var(--height-of-loader);
  border-radius: 30px;
  background-color: rgba(0,0,0,0.2);
  position: relative;
}

.loader::before {
  content: "";
  position: absolute;
  background: var(--loader-color);
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  border-radius: 30px;
  animation: moving 1s ease-in-out infinite;
  ;
}

@keyframes moving {
  50% {
    width: 100%;
  }

  100% {
    width: 0;
    right: 0;
    left: unset;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>