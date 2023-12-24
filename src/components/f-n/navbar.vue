<template>
    <div class="flex w-full h-[70px] justify-center items-center bg-[#B6D0E2] max-[420px]:h-auto max-[420px]:py-8 border-b">
        <div class="flex flex-row items-center justify-between w-[1300px] max-[420px]:flex-col">
            <img src="/photos/newlogo-removedbg.png" alt="" class="w-[100px] max-[420px]:hidden">
        <ul class="flex gap-[2.5em] text-black pr-4 max-[420px]:px-4">
            <li class=""><router-link to="/">Početna</router-link></li>
            <li class=""><router-link to="/galerija">Galerija</router-link></li>
            <li class=""><router-link to="/projekti">Projekti</router-link></li>
        </ul>
    </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-active{
  border-bottom: 1px solid rgb(0, 0, 0) !important;
  padding-bottom: 5px !important;
}

</style>