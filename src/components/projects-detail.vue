<template>
        <div class="w-full flex justify-center items-center pt-[40px] px-2 py-16 text-[#D2A44C] bg-black">
        <div class="flex justify-between items-start w-[1350px] max-[920px]:flex-col">
            <div class="w-[50%] px-8 max-[1100px]:w-full">
                <img :src="project.image" alt="" class="max-[920px]:w-[100%] h-[30em] w-[100%] object-cover">
                <div class="flex w-[500px] w-full justify-between flex-wrap max-[920px]:w-[100%]">
    <img v-if="project.image1" :src="project.image1" alt="" class="w-[33%] h-[100px] my-[20px] max-[920px]:w-[30%] max-[420px]:h-[50px] object-cover">
        <img  v-if="project.image2" :src="project.image2" alt="" class="w-[33%] h-[100px] my-[20px] max-[920px]:w-[30%] max-[420px]:h-[50px] object-cover">


    <div v-if="project.image3" class="relative w-[33%] h-[100px] max-[920px]:w-[30%] max-[420px]:h-[50px] my-[20px]">
        <img :src="project.image3" alt="" class="w-full h-full object-cover">
        <div class="absolute inset-0 flex items-center justify-center bg-black text-white font-bold text-[3rem] opacity-[0.5]">+</div>
    </div>

</div>
            </div>
            <div class="w-[50%] max-[1100px]:w-full max-[920px]:px-8 max-[420px]:p-0 ">
                <h1 class="mulifont uppercase text-[30px] tracking-[.05em] font-bold max-[390px]:text-[22px]">{{project.naslov1}}</h1>
                <p class="mulifont mulifont text-[27px] font-normal max-[390px]:text-[18px]">{{project.naslov2}}</p>
                <div v-for="(paragraph, index) in opisParagraphs" :key="index">
      <p v-if="index > 0" class="opis-paragraph">{{ paragraph }}</p>
      <p v-else>{{ paragraph }}</p>
    </div>
               <a href="mailto:info@fenixbauhr.com"><button class="border px-8 py-3 my-4 bg-black text-[#D2A44C] border-[#D2A44C] ">Kontaktirajte nas</button></a> 
            </div>
        </div>
    </div>
</template>

<script>

export default {
  props: ['id'],
  data() {
    return {
        projects: [
        { id: 1, name: 'KUCA NA BREGANI', image: '/projekti/kuca-bregana/photo1.webp', image1: '/projekti/kuca-bregana/photo2.webp', image2: '/projekti/kuca-bregana/photo3.webp', image3: '/projekti/kuca-bregana/photo4.webp', naslov1: 'Predivna kuća - ROH-BAU.', naslov2:'197 m2 NETO. BREGANA - PRILIKA', opis:'kuca na bregani' },
        { id: 2, name: 'OBITELJSKA KUĆA', image: '/projekti/kuca-rd/photo1.webp', image1: '/projekti/kuca-rd/photo2.webp', image2: '/projekti/kuca-rd/photo3.webp', image3: '/projekti/kuca-rd/photo4.webp', naslov1: 'Predivna obiteljska kuća', naslov2:'178 m2 Samobor, Stražnik - PRILIKA', opis:'Prodaje se predivna kuća (novogradnja po novom pravilniku i uvjetima) u Bregani koja nudi miran i opušten životni stil u blizini vrtića, škole, dućana, benzinske pumpe, ljekarne, autobusne stanice i svih ostalih sadržaja u krugu 5 minuta pješačenja. Do Samobora 5 min autom, do Zagreba 15 min autom. Kao početna kuća u nizu s tri strane okućnice prostire se na površine od 363 kvadratnih metara. ROH-BAU.Građevinska parcela je formirana, površine 363 m2 Građevina je stambene namjene te postoji mogućnost za 2 stana za dvije obitelji. 3 do 4 parkirna mjesta, mogućnost pečenjare, bazena, vrta. Stambena građevina ima prizemlje i kat u formi visokog potkrovlja. Krov je dvostrešni kosi krov. Tlocrtna površina građevine je 105,12 m2, a bruto građevinska površina 238 m2. Ulaz u stambenu građevinu je s bočne strane. U prizemlju se nalazi hodnik sa stubištem, kupaonica, radni prostor, kuhinja, blagovaonica i dnevni boravak. Uz dnevni boravak je nenatkrivena terasa. (21 m2) Na katu su hodnik, tri sobe, garderoba, kupaonica, praonica i spremište. Iz jedne sobe se izlazi na balkon (6 m2). Stambena građevina će se priključiti na gradske mreže električne energije, vodoopskrbe i odvodnje. Priključci će se izvesti na izvedene instalacije u pristupnoj cesti prema uvjetima nadležnih komunalnih poduzeća. Mogućnost priključka plina uz samu blizinu nekretnine CIJENA: 1600.00 €/m2 KONTAKT: Samir Čaušević 091 6194 943 LOKACIJA: Ul. Ksavera Šandora Gjalskog 4 Bregana' },
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
};
</script>