<template>
    <div class="flex w-full h-[85px] justify-center items-center bg-[#000]  border-b border-[#D2A44C] border-b-[2px] relative z-[999] px-4">
        <div class="flex flex-row items-center justify-between w-[1300px]">
            <img src="/photos/newlogo-removedbg.png" alt="" class="w-[70px]">
        <ul class="flex gap-[2.5em] pr-4 max-[420px]:px-4 text-[#D2A44C] text-[13px] uppercase max-[800px]:hidden">
            <li class=""><router-link to="/">Početna</router-link></li>
            <li class=""><router-link to="/galerija">Galerija</router-link></li>
            <li class=""><router-link to="/kontakt">Kontakt</router-link></li>
        </ul>
         <div class="overlay flex flex-col text-[#D2A44C]" :class="{ active: isActive }">
    <router-link to="/" @click="clickLink" class="hover-effect animation-text">Početna</router-link>
    <router-link to="/galerija" @click="clickLink" class="hover-effect animation-text">Galerija</router-link>
    <router-link to="/kontakt" @click="clickLink" class="hover-effect animation-text">Kontakt</router-link>
  </div>
  <div class="hamb_menu min-[801px]:hidden">
    <input id="checkbox" type="checkbox" :checked="isActive" @change="showMobile">
    <label class="toggle" for="checkbox">
      <div id="bar1" class="bars"></div>
      <div id="bar2" class="bars"></div>
      <div id="bar3" class="bars"></div>
    </label>
  </div>
    </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    showMobile() {
      this.isActive = !this.isActive;
      if (this.isActive) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    clickLink() {
      this.isActive = false;
      document.body.style.overflow = '';
    },
  },
};
</script>
<style scoped>
.router-link-active{
  color: #ABABAB;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0;
  visibility: hidden; /* Set the initial visibility to hidden */
  z-index: 9998;
  padding: 100px 40px;
  transition: opacity 0.5s ease, visibility 0s 0.5s; /* Delay visibility transition */
}

.overlay.active {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.5s ease, visibility 0s; /* Reset visibility transition */
}
.animation-text {
  padding: 15px 0;
  line-height: 1;
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.overlay.active .animation-text {
  opacity: 1;
  transform: translateX(0);
}

@media only screen and (max-width: 800px) {
  .hamb_menu{
    display:block;
    z-index: 9999;
  }
}
    .hover_effect:hover{
        color:#0D4268;
    }
    #checkbox {
  display: none;
}

.toggle {
  position: relative;
  width: 23px;
  height: 35px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
  transition-duration: .5s;
}

.bars {
  width: 100%;
  height: 2px;
  background-color: #D2A44C;
  border-radius: 4px;
}

#bar2 {
  transition-duration: .8s;
}

#bar1 {
  width: 100%;
}

#bar2 {
  width: 100%;
}

#checkbox:checked + .toggle .bars {
  position: absolute;
  transition-duration: .5s;
}

#checkbox:checked + .toggle #bar2 {
  transform: scaleX(0);
  transition-duration: .1s;
}

#checkbox:checked + .toggle #bar1 {
  width: 100%;
  transform: rotate(45deg);
  transition-duration: .5s;
}

#checkbox:checked + .toggle #bar3 {
  width: 100%;
  transform: rotate(-45deg);
  transition-duration: .5s;
}

#checkbox:checked + .toggle {
  transition-duration: .5s;
  transform: rotate(180deg);
}


</style>