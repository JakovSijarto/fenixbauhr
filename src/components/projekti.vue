<template>
  <transition name="fade">
  <div v-if="loading" class="page-loader flex flex-col">
      <!-- Add your loading spinner or animation here -->
      <img src="/photos/newlogo-removedbg.png" alt="" class="w-[280px] pb-8">
      <div class="loader"></div>
    </div>
  </transition>
    <div class="text-center py-4 text-[#D2A44C] bg-black font-bold" style="font-size: calc(2vw + 1.5em);">
        PROJEKTI
    </div>
    <div class="w-full flex justify-center items-start bg-black h-[100vh] max-[512px]:h-full">
      <ul class="flex flex-wrap w-[90%] items-start justify-center pt-[2em] text-[22px] ">
    <li v-for="project in projects" :key="project.id" class="mx-[15px] mb-[30px] overed_card ">
      <router-link :to="{ name: 'project-details', params: { id: project.id }}" class="flex justify-start items-start flex-col max-[985px]:w-[200px] max-[512px]:w-[100%] relative">
  <div class="relative">
    <img loading="lazy" :src="getImagePath(project.image)" alt="Project Image" class="w-[413px] max-h-[270px] h-[270px] object-cover max-[985px]:h-[700px]" />
    <div class="absolute bottom-0 left-0 right-0 text-center text-[15px] import_font  text-[#D2A44C] font-bold" style="background: rgba(0, 0, 0, 0.5); height: 50px; line-height: 50px;">
      Pogledaj više
    </div>
  </div>
  <p class="pt-4 text-hover text-[18px] import_font text-size_pr text-[#D2A44C]">{{ project.name }}</p>
  <p class="pt-4 text-hover text-[18px] import_font text-size_pr text-[#D2A44C] font-bold">{{ project.cijena }}</p>
</router-link>



    </li>
  </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      projects: [
        { id: 1, name: 'KUCA NA BREGANI', image: '/projekti/kuca-bregana/photo1.webp', cijena:'1600.00 €/m2' },
        { id: 2, name: 'OBITELJSKA KUĆA', image: '/projekti/kuca-rd/photo1.webp', cijena:'178.000 €'},
      ],
    };
  },
  methods: {
    getImagePath(image) {
      return `./${image}`;
    },
  },
  mounted() {
    // Simulate a 2-second delay for demonstration purposes
    setTimeout(() => {
      this.loading = false; // Set loading state to false after 2 seconds
    }, 2000);
  },
};
</script>
<style>
@media (min-width: 160px) and (max-width: 1023px){
  .text-size{
    font-size: calc(.255vw + 1rem)!important;
  }
  .text-size_pr{
    font-size: calc((22vw - 20vw)/ 10 + 1.25rem)!important;
  }
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