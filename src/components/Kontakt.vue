<template>
  <div class="flex justify-center flex-col bg-black items-center w-full" id="contact">
     <div class="flex justify-between w-[1340px] items-center pt-[100px] max-[1370px]:flex-col max-[1370px]:w-full max-[1370px]:pt-[50px] px-8">
             <div class="w-full mb-[6em]">
                 <form ref="form" @submit="sendEmail">
                 <p class="text-center latofont text-[35px] font-bold mb-[5px] text-[#D2A44C]">Pošaljite nam poruku!</p>
                 <p class="text-center catamaran mb-[30px] text-[#D2A44C]">Za više informacija o našem prijevozu stupimo u kontakt</p>
                 <div class="flex gap-[2em] w-[full] justify-between mb-[20px] max-[640px]:flex-col">
                     <div class="w-[50%] max-[640px]:w-full">
                         <p class="mb-[5px] text-[#D2A44C] font-bold">Ime</p>
                         <input type="text" required v-model="ime" name="ime" class="border border-[#D2A44C] w-[100%] h-[50px] py-[0.375rem] pl-[20px] pr-[0.75rem] bg-black text-[#D2A44C] text-[1rem] leading-6">
                     </div>
                     <div class="w-[50%] max-[640px]:w-full">
                         <p class="mb-[5px] text-[#D2A44C] font-bold">Email</p>
                         <input type="email" required v-model="email" name="email" class="border border-[#D2A44C]  w-[100%] h-[50px] py-[0.375rem] pl-[20px] pr-[0.75rem] bg-black text-[#D2A44C] text-[1rem] leading-6">
                     </div>
                 </div>
                 <div class="w-[full] mb-[20px]">
                         <p class="mb-[5px] text-[#D2A44C] font-bold">Telefon</p>
                         <input type="phone" required v-model="telefon" name="telefon" class="border border-[#D2A44C]  w-[100%] h-[50px] py-[0.375rem] pl-[20px] pr-[0.75rem] bg-black text-[#D2A44C] text-[1rem] leading-6">
                 </div>
                 <div class="w-full mb-[20px]">
                         <p class="mb-[5px] text-[#D2A44C] font-bold">Message</p>
                         <textarea v-model="poruka" name="poruka" class="border border-[#D2A44C] py-[1.2rem] text-[#D2A44C] px-[20px] bg-black text-[1rem] leading-6 w-full h-[10em] max-h-[10em]"></textarea>
                 </div>
                 <div class="text-center">
                     <button type="submit" class="py-[12px] px-[35px] bg-[#D2A44C] rounded text-white hover_button mt-[30px] max-[640px]:w-[100%]">Pošalji poruku</button>
                 </div>
             </form>
             </div>
             <div class="w-[600px] text-[#D2A44C] text-center px-[10px] pl-[70px] max-[1370px]:flex max-[1370px]:p-0 max-[1370px]:w-full max-[1370px]:justify-between max-[1370px]:px-8 max-[850px]:flex-col">
                 <div class="">
                     <svg class="m-auto mb-[8px]" width="50px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="#D2A44C"></path> </g></svg>
                     <p class="latofont text-[20px] font-bold mb-[15px]">Nazovi nas</p>
                     <p class="mb-[30px] catamaran mb-[30px] pb-[30px] max-[1370px]:!border-b-0 max-[850px]:!border-b-2" style="border-bottom: 1px solid #D2A44C;">Phone:<a href="tel:+386953803940" class="pl-[5px]">(+385) 95-380-3940</a></p>
                 </div>
                 <div class="">
                     <svg class="m-auto mb-[8px]" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#D2A44C" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"></path> </g></svg>
                     <p class="font-bold text-[20px] mb-[15px] latofont">Naša lokacija</p>
                     <p class="catamaran mb-[30px] pb-[30px] max-[1370px]:!border-b-0 max-[850px]:!border-b-2" style="border-bottom: 1px solid #D2A44C;">Samobor</p>
                 </div>
                 <div class="max-[850px]:mb-[5rem]">
                     <svg class="m-auto mb-[8px]" width="40px" height="40px" viewBox="0 -3.5 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>mail</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-414.000000, -261.000000)" fill="#D2A44C"> <path d="M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 L445,261 Z" id="mail" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
                     <p class="latofont text-[20px] font-bold mb-[15px]">Email</p>
                     <p class="catamaran">Gmail: <a href="mailto:info@fenixbauhr.com" class="min-[347px]:pl-[5px]">info@fenixbauhr.com</a></p>
                 </div>
             </div>
     </div>        
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44502.28045354603!2d15.70851495!3d45.80339659999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765cade0a424095%3A0x400ad50862bb750!2sSamobor!5e0!3m2!1sen!2shr!4v1706470928507!5m2!1sen!2shr" class="w-full min-h-[500px]" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
data(){
return{
ime:"",
email:"",
telefon:"",
poruka:""
}
},
methods: {
sendEmail() {
emailjs.sendForm('service_26j234o', 'template_a1dya2y', this.$refs.form, 'tGrrFjuKCc7u6wh3f')
 .then((result) => {
      console.log('SUCCESS!', result.text);
 }, (error) => {
     console.log('FAILED...', error.text);
 });
 
},

},

}
</script>
