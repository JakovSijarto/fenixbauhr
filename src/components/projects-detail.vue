<template>
  <transition name="fade">
  <div v-if="loading" class="page-loader flex flex-col">
      <!-- Add your loading spinner or animation here -->
      <img loading="lazy" src="/photos/newlogo-removedbg.png" alt="" class="w-[280px] pb-8">
      <div class="loader"></div>
    </div>
  </transition>

  <transition name="fade">
    <div v-if="isFullscreen" class="fullscreen-gallery">
      <Swiper v-if="project.images.length > 0" :slides-per-view="1" :modules="modules" :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
    }">
  <SwiperSlide v-for="(image, index) in project.images" :key="index">
    <img :src="image" alt="" class="">
  </SwiperSlide>
</Swiper>
      <button @click="toggleFullscreen" class="close-button text-[4rem]">×</button>
    </div>
  </transition>
        <div class="w-full flex justify-center items-center pt-[40px] px-2 py-16 text-[#D2A44C] bg-black">
        <div class="flex justify-between items-start w-[1350px] max-[920px]:flex-col">
            <div class="w-[50%] px-8 max-[1100px]:w-full">
                <img loading="lazy" :src="project.image" alt="" class="max-[920px]:w-[100%] h-[30em] w-[100%] object-cover max-[420px]:h-[300px] max-[420px]:w-full">
                <div class="flex w-[500px] w-full justify-between flex-wrap max-[920px]:w-[100%]">
    <img loading="lazy" v-if="project.image1" :src="project.image1" alt="" class="w-[33%] h-[100px] my-[20px] max-[920px]:w-[30%] max-[420px]:h-[50px] object-cover">
        <img loading="lazy"  v-if="project.image2" :src="project.image2" alt="" class="w-[33%] h-[100px] my-[20px] max-[920px]:w-[30%] max-[420px]:h-[50px] object-cover">

        <div v-if="project.image3" class="relative w-[33%] h-[100px] max-[920px]:w-[30%] max-[420px]:h-[50px] my-[20px]" @click="toggleFullscreen">
    <img loading="lazy" :src="project.image3" alt="" class="w-full h-full object-cover">
    <div class="absolute inset-0 flex items-center justify-center bg-black text-white font-bold text-[3rem] opacity-[0.5]">+</div>
  </div>

</div>
            </div>
            <div class="w-[50%] max-[1100px]:w-full max-[920px]:px-8 max-[420px]:p-0 ">
                <h1 class="mulifont uppercase text-[30px] tracking-[.05em] font-bold max-[390px]:text-[22px]">{{project.naslov1}}</h1>
                <p class="mulifont mulifont text-[27px] font-normal max-[390px]:text-[18px]">{{project.naslov2}}</p>
                <div class="text-[14px]">
                  <p class="py-4">{{ project.opis }}</p>
                  <p class="py-4">{{ project.opis2 }}</p>
                  <p><b class="pr-2">CIJENA:</b> {{ project.cijena }}</p>
                  <p class="py-2"><b class="pr-2">KONTAKT:</b><a href="tel:+385916194943"></a> {{ project.kontakt }}</p>
                  <p><b class="pr-2">LOKACIJA:</b>{{ project.lokacija }}</p>
                </div>
               <a href="mailto:info@fenixbauhr.com"><button class="border px-8 py-3 my-4 bg-black text-[#D2A44C] border-[#D2A44C] ">Kontaktirajte nas</button></a> 
            </div>
        </div>
    </div>
</template>

<script>
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import {EffectFade, Autoplay } from 'swiper/modules';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ['id'],
  methods: {
    toggleFullscreen() {
      // Toggle a variable to track fullscreen state
      this.isFullscreen = !this.isFullscreen;

      // If entering fullscreen, add a listener to exit on click outside the image
      if (this.isFullscreen) {
        document.addEventListener("click", this.exitFullscreenOnClickOutside);
      } else {
        // If exiting fullscreen, remove the listener
        document.removeEventListener("click", this.exitFullscreenOnClickOutside);
      }
    },
    exitFullscreenOnClickOutside(event) {
      // Check if the clicked element is not the fullscreen image
      if (!event.target.closest(".fullscreen-image")) {
        // Exit fullscreen if clicked outside the image
        this.isFullscreen = false;
        document.removeEventListener("click", this.exitFullscreenOnClickOutside);
      }
    },
  },
  setup() {
      return {
        pagination: {
          clickable: true,
        },
        modules: [EffectFade, Autoplay],
      };
    },
  data() {
    return {
      loading: true,
      isFullscreen: false,
      projects: [
        { id: 1, name: 'KUCA NA BREGANI', cijena:'1600.00 €/m2',images:['/projekti/kuca-bregana/photo1.webp','/projekti/kuca-bregana/photo2.webp','/projekti/kuca-bregana/photo3.webp','/projekti/kuca-bregana/photo4.webp'],  kontakt:'Samir Čaušević (091 6194 943)', lokacija:'Ul. Ksavera Šandora Gjalskog 4 Bregana', image: '/projekti/kuca-bregana/photo1.webp', image1: '/projekti/kuca-bregana/photo2.webp', image2: '/projekti/kuca-bregana/photo3.webp', image3: '/projekti/kuca-bregana/photo4.webp', naslov1: 'Predivna kuća - ROH-BAU.', naslov2:'197 m2 NETO. BREGANA - PRILIKA', opis:'kuca na bregani',  opis:'Prodaje se predivna kuća (novogradnja po novom pravilniku i uvjetima) u Bregani koja nudi miran i opušten životni stil u blizini vrtića, škole, dućana, benzinske pumpe, ljekarne, autobusne stanice i svih ostalih sadržaja u krugu 5 minuta pješačenja. Do Samobora 5 min autom, do Zagreba 15 min autom. Kao početna kuća u nizu s tri strane okućnice prostire se na površine od 363 kvadratnih metara. ROH-BAU.Građevinska parcela je formirana, površine 363 m2 Građevina je stambene namjene te postoji mogućnost za 2 stana za dvije obitelji. 3 do 4 parkirna mjesta, mogućnost pečenjare, bazena, vrta. Stambena građevina ima prizemlje i kat u formi visokog potkrovlja. Krov je dvostrešni kosi krov. ', opis2:'Tlocrtna površina građevine je 105,12 m2, a bruto građevinska površina 238 m2. Ulaz u stambenu građevinu je s bočne strane. U prizemlju se nalazi hodnik sa stubištem, kupaonica, radni prostor, kuhinja, blagovaonica i dnevni boravak. Uz dnevni boravak je nenatkrivena terasa. (21 m2) Na katu su hodnik, tri sobe, garderoba, kupaonica, praonica i spremište. Iz jedne sobe se izlazi na balkon (6 m2). Stambena građevina će se priključiti na gradske mreže električne energije, vodoopskrbe i odvodnje. Priključci će se izvesti na izvedene instalacije u pristupnoj cesti prema uvjetima nadležnih komunalnih poduzeća. Mogućnost priključka plina uz samu blizinu nekretnine.' },
        { id: 2, name: 'OBITELJSKA KUĆA',images:["/projekti/kuca-rd/photo1.webp","/projekti/kuca-rd/photo2.webp","/projekti/kuca-rd/photo3.webp","/projekti/kuca-rd/photo4.webp","/projekti/kuca-rd/photo5.webp","/projekti/kuca-rd/photo6.webp","/projekti/kuca-rd/photo7.webp","/projekti/kuca-rd/photo8.webp","/projekti/kuca-rd/photo9.webp","/projekti/kuca-rd/photo10.webp","/projekti/kuca-rd/photo11.webp","/projekti/kuca-rd/photo12.webp","/projekti/kuca-rd/photo13.webp","/projekti/kuca-rd/photo14.webp","/projekti/kuca-rd/photo15.webp","/projekti/kuca-rd/photo16.webp","/projekti/kuca-rd/photo17.webp","/projekti/kuca-rd/photo18.webp"], opis:'Obiteljska kuća ili pogodno za poslovni prostor poput hostela ili hotela. Kuća se moze doc pogledat uz najavu dan prije od 11 do 17 sati svaki dan (i vikendom). (centar ulica Taborec 11 ( 200 metara od restorana Gabrek ))', kontakt:'0953803940 - Silvio', cijena:'178.000 €', lokacija:'Taborec 11, 10430 Samobor, Hrvatska', image: '/projekti/kuca-rd/photo1.webp', image1: '/projekti/kuca-rd/photo2.webp', image2: '/projekti/kuca-rd/photo3.webp', image3: '/projekti/kuca-rd/photo4.webp', naslov1: 'Predivna obiteljska kuća', naslov2:'178 m2 Samobor, Taborec 11 - PRILIKA',  },
      ],

      project: {},
    };
  },
  created() {
    this.project = this.projects.find((p) => p.id === parseInt(this.id));
  },
  computed: {
    imagePath() {
      // Assuming the images are in the same directory as your component
      return `/studio_oker/${this.project.image}`
    },
    opisParagraphs() {
      // Split the 'opis' text into an array of paragraphs
      return this.project.opis.split('\n');
    },
  },
  mounted() {
    // Simulate a 2-second delay for demonstration purposes
    setTimeout(() => {
      this.loading = false; // Set loading state to false after 2 seconds
    }, 2000);
  },
  methods: {
  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
  },
  // ... rest of your methods
},
};
</script>
<style>
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
.fullscreen-gallery {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
  }

  .fullscreen-gallery .swiper-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .fullscreen-gallery .swiper-slide {
    text-align: center;
  }

  .fullscreen-gallery .swiper-slide img { /* Set width to 100% for full-width */
  height: 80%;
  object-fit: cover; /* or "contain" for different scaling options */
  margin: auto; /* Center the image both horizontally and vertically */
  display: block; /* Remove any default inline-block behavior */
}
  .fullscreen-gallery .close-button {
    position: absolute;
    top: 20px;
    right: 20px;

    color: white;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    z-index: 1000000;
  }

  .fullscreen-gallery .close-button:hover {
    color: #D2A44C; /* Change color on hover */
  }
</style>