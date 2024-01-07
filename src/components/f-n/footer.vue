<template>
    <div class="flex w-full justify-center items-center border-t relative z-[9999] bg-black text-[#D2A44C] border-t-[#D2A44C] ">
        <ul class="w-[1350px] flex justify-between items-center p-4 max-[360px]:flex-col max-[360px]:text-center">
            <li class="min-[361px]:hidden"><img src="/photos/newlogo-removedbg.png" alt="" class="w-[100px] "></li>
            <li class="flex flex-col gap-[0.2em]  max-[360px]:py-8">
                <span class="font-bold">Kontakt:</span>
                <span><a href="mailto:info@fenixbauhr.com">info@fenixbauhr.com</a></span>
                <span><a href="tel:+386953803940">(+385) 95-380-3940</a></span>
            </li>
            <li class="max-[360px]:hidden"><img src="/photos/newlogo-removedbg.png" alt="" class="w-[100px] "></li>
            <li class="flex flex-col gap-[0.2em]">
                <span>
                    <router-link to="/">Početna</router-link>
                </span>
                <span>
                    <router-link to="/galerija">Galerija</router-link>
                </span>
                <span>
                    <router-link to="/projekti">Projekti</router-link>
                </span>
            </li>
        </ul>
    </div>
</template>

<script setup>

</script>

