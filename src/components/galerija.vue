<template>
    <div>
    <!-- Fullscreen Gallery -->
    <div v-if="fullscreenImage" class="fullscreen-gallery">
      <button @click="navigateFullscreen(-1)" class="nav-button left-button">Previous</button>
      <img :src="`/photos_working/${fullscreenImage}`" alt="">
      <button @click="navigateFullscreen(1)" class="nav-button right-button">Next</button>
      <button @click="closeFullscreen" class="close-button">Close</button>
    </div>

    <!-- Original Gallery -->
    <div>
      <swiper
        @swiperSlideChange="onSlideChange"
        class="w-full flex justify-center items-center my-4"
      >
      <div class="flex flex-wrap justify-center gap-[1em]">

      
        <swiper-slide v-for="(image, index) in images" :key="index" @click="openFullscreen(index)" class="flex justify-center">
            <img :src="`/photos_working/${image}`" alt="" loading="lazy" class="w-[400px] h-[400px] object-cover max-[430px]:w-[90%]">
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
</style>