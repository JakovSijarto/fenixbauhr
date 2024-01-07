<template>
  <transition name="fade">
  <div v-if="loading" class="page-loader flex flex-col">
      <!-- Add your loading spinner or animation here -->
      <img src="/photos/newlogo-removedbg.png" alt="" class="w-[280px] pb-8">
      <div class="loader"></div>
    </div>
  </transition>
    <div>
      <div class="h-[92vh] w-full relative z-[1] ">
    <swiper :loop="true" :modules="modules" :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
     :effect="'fade'" class="mySwiper "
     >
     <swiper-slide>
      <div class="swiper-image-wrapper">
        <img src="/photos_working/photo1.webp" alt="" class="object-cover w-[full] h-[full] ">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-image-wrapper">
        <img src="/photos_working/photo2.webp" alt="" class="object-cover w-[full] h-[full] ">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-image-wrapper">
        <img src="/photos_working/photo3.webp" alt="" class="object-cover w-[full] h-[full] ">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-image-wrapper">
        <img src="/photos_working/photo4.webp" alt="" class="object-cover w-[full] h-[full] ">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-image-wrapper">
        <img src="/photos_working/photo5.webp" alt="" class="object-cover w-[full] h-[full] ">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-image-wrapper">
        <img src="/photos_working/photo6.webp" alt="" class="object-cover w-[full] h-[full] ">
      </div>
    </swiper-slide>
  </swiper>
  <div class="text-overlay flex gap-[1em] flex-col items-center">
    <p class="text-[#D2A44C] font-semibold tracking-[0.1em] max-[840px]:leading-[1em]" style="font-size: calc(2vw + 3em);">FENIX BAU</p>
    <p class="text-[18px] max-[840px]:text-[14px]">Najbolji izbor za gradnju.</p>
    <button @click="toGalerija" class="border border-black bg-[#D2A44C] w-[40%] mt-[2em] py-3 text-black font-bold max-[870px]:w-[80%] ">POGLEDAJ VIŠE</button>

   
  </div>
  </div>
<div class="w-full flex justify-center items-center relative z-[999] bg-black border-t border-[#D2A44C]">
  <div class="w-[1300px] flex justify-between items-start text-[#D2A44C] py-16  mx-4">
    <div class="w-[40%] max-[550px]:w-full">
      <p class="font-bold" style="font-size: calc(2vw + 0.5em);">O NAMA</p>
      <p class="py-6 pb-12" style="font-size: calc(1vw + 10px);">uz realnu cijenu iste novoizgrađene nekretnine, možete uštediti između 30.000 do 60.000 Eura.</p>
      <p class="font-bold" style="font-size: calc(1vw + 15px);">NAŠA MISIJA</p>
      <p class="py-6" style="font-size: calc(1vw + 10px);">Naša firma pruža kompletnu podršku u pronalasku idealnih parcela za vaše potrebe, te u procesu ishođenja dozvola, rješavanja idejnih projekata i svih potrebnih dozvola za vašu gradnju. Pouzdano izvodimo građenje kako bismo vašu viziju pretvorili u stvarnost.</p>
      <button @click="toGalerija" class="border border-black bg-[#D2A44C] w-[40%] mt-[0.8em] py-3 text-black font-bold max-[870px]:w-[80%] ">POGLEDAJ VIŠE</button>
    </div>
    <img src="/photos/man.png" alt="" class="object-fit w-[40%] max-[1000px]:w-[50%] max-[550px]:hidden">
  </div>
</div>
    </div>

</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/effect-fade';
  import { Pagination, EffectFade, Autoplay } from 'swiper/modules';


  export default {
    data(){
return{
  loading: true,
 ime:"",
 email:"",
 telefon:"",
 poruka:""
}
},
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        pagination: {
          clickable: true,
        },
        modules: [Pagination, EffectFade, Autoplay],
      };
    },
    methods: {
    toGalerija() {
      this.$router.push('/galerija');
    }
  },
  mounted() {
    // Simulate a 2-second delay for demonstration purposes
    setTimeout(() => {
      this.loading = false; // Set loading state to false after 2 seconds
    }, 1200);
  },
  };
</script>

<style scoped>
.swiper-image-wrapper {
    position: relative;
  }

  .text-overlay {
    position: absolute;
    top: calc(50% - 1em);
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white; /* Set the color you prefer */
    z-index: 9999; /* Ensure it appears on top of the swiper */
    
  }

.mySwiper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;/* Adjust as needed */
  background-color: white; /* Adjust background color if necessary */
}

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-image-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.swiper-image-wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8); /* Adjust the opacity here */
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