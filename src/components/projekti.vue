<template>
    <div class="text-center py-4 text-[#D2A44C] bg-black font-bold" style="font-size: calc(2vw + 1.5em);">
        PROJEKTI
    </div>
    <div class="w-full flex justify-center items-start bg-black h-[100vh]">
      <ul class="flex flex-wrap w-[90%] items-start justify-center pt-[2em] text-[22px] ">
    <li v-for="project in projects" :key="project.id" class="mx-[15px] mb-[30px] overed_card ">
      <router-link :to="{ name: 'project-details', params: { id: project.id }}" class=" flex justify-start items-start flex-col  max-[985px]:w-[200px] max-[512px]:w-[100%]">
        <img :src="getImagePath(project.image)" alt="Project Image" class="w-[413px] max-h-[270px] h-[270px] object-cover max-[985px]:h-[700px]"/>
        <p class="pt-4 text-hover text-[18px] import_font text-size_pr text-[#D2A44C]" >{{ project.name }}</p>
      </router-link>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { id: 1, name: 'KUCA NA BREGANI', image: '/projekti/kuca-bregana/photo1.webp', image1: '/projekti/kuca-bregana/photo2.webp', image2: '/projekti/kuca-bregana/photo3.webp', image3: '/projekti/kuca-bregana/photo4.webp', naslov1: 'Predivna kuća - ROH-BAU.', naslov2:'197 m2 NETO. BREGANA - PRILIKA', opis:'kuca na bregani' },
        { id: 2, name: 'OBITELJSKA KUĆA', image: '/projekti/kuca-rd/photo1.webp', image1: '/projekti/kuca-rd/photo2.webp', image2: '/projekti/kuca-rd/photo3.webp', image3: '/projekti/kuca-rd/photo4.webp', naslov1: 'Predivna obiteljska kuća', naslov2:'178 m2 Samobor, Stražnik - PRILIKA', opis:'Prodaje se predivna kuća (novogradnja po novom pravilniku i uvjetima) u Bregani koja nudi miran i opušten životni stil u blizini vrtića, škole, dućana, benzinske pumpe, ljekarne, autobusne stanice i svih ostalih sadržaja u krugu 5 minuta pješačenja. Do Samobora 5 min autom, do Zagreba 15 min autom. Kao početna kuća u nizu s tri strane okućnice prostire se na površine od 363 kvadratnih metara. ROH-BAU.Građevinska parcela je formirana, površine 363 m2 Građevina je stambene namjene te postoji mogućnost za 2 stana za dvije obitelji. 3 do 4 parkirna mjesta, mogućnost pečenjare, bazena, vrta. Stambena građevina ima prizemlje i kat u formi visokog potkrovlja. Krov je dvostrešni kosi krov. Tlocrtna površina građevine je 105,12 m2, a bruto građevinska površina 238 m2. Ulaz u stambenu građevinu je s bočne strane. U prizemlju se nalazi hodnik sa stubištem, kupaonica, radni prostor, kuhinja, blagovaonica i dnevni boravak. Uz dnevni boravak je nenatkrivena terasa. (21 m2) Na katu su hodnik, tri sobe, garderoba, kupaonica, praonica i spremište. Iz jedne sobe se izlazi na balkon (6 m2). Stambena građevina će se priključiti na gradske mreže električne energije, vodoopskrbe i odvodnje. Priključci će se izvesti na izvedene instalacije u pristupnoj cesti prema uvjetima nadležnih komunalnih poduzeća. Mogućnost priključka plina uz samu blizinu nekretnine CIJENA: 1600.00 €/m2 KONTAKT: Samir Čaušević 091 6194 943 LOKACIJA: Ul. Ksavera Šandora Gjalskog 4 Bregana' },
      ],
    };
  },
  methods: {
    getImagePath(image) {
      return `./${image}`;
    },
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
}</style>