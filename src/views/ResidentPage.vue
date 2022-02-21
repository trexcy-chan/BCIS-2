<template>
   <ion-content :fullscreen="true">
      <div class="bg-white flex flex-col font-sans">

        <div class="w-screen shadow-md"> 
            <div class="container mx-auto px-8">
                <header class="flex flex-col sm:flex-row items-center justify-between relative">
                    <img class="scale-75 " src="../assets/images/tinago.png">
                    <nav class="hidden md:flex text-lg">
                    <a href="/resident" class="text-gray-800 hover:text-teal-400 py-3 px-6">Home</a>
                    <a href="#" class="text-gray-800 hover:text-teal-400 py-3 px-6">Requirements</a>
                    <a href="/requestcert" class="text-gray-800 hover:text-teal-400 py-3 px-6">Schedule an Appointment</a>
                    <a href="#" class="bg-amber-500 hover:bg-teal-300 rounded-full uppercase text-white py-3 px-6">Log out</a>
                    </nav>
                </header>
            </div>
        </div>        
       

      <div class="container mx-auto px-8 mt-10">
         <div class="float-left">
            <ion-label class="text-5xl text-amber-400  indent-0.5">Welcome!
            </ion-label>
            <br>
            <ion-text class="text-4xl text-gray-500 font-bold indent-0.5">Trexcy Fe Torrefiel</ion-text>
            <hr class=" w-60 mb-6 border-t border-teal-400" />
            <ion-label class="text-6xl font-bold indent-0.5 text-amber-400">BARANGAY TINAGO</ion-label>
            <br>
            <ion-label class="text-6xl font-bold indent-0.5 text-amber-400">CERTIFICATE</ion-label>
            <br>
            <ion-label class="text-6xl font-bold indent-0.5 text-teal-400">ISSUANCE SYSTEM</ion-label>
            <br>
            <ion-label class="text-lg text-gray-500">We're here to serve you in a fast, safe, and easy way</ion-label>
            <br>
            <ion-button class="mt-4 rounded-md bg-orange-1 text-white" size="large">About</ion-button>
         </div>
         <div class="float-right content-end">
            <img src="../assets/images/landing.png">
         </div>
      </div>
      <div class="mt-10 text-center">
         <ion-label class="text-6xl text-teal-200">How can we help you?</ion-label>
      </div>
      <div class="flex justify-evenly block my-10">      
            <div class="px-2 py-2 rounded bg-white hover:bg-gray-300" >
                <a href="/requestcert">     
                    <div class=" w-52 h-52">
                        <img class=" scale-75 mx-auto w-52 h-52" src="../assets/images/requestcert.png">
                    </div>
                    <ion-label class="text-xl text-teal-400 font-bold block text-center uppercase">Request Certificate</ion-label>
                </a>
            </div>
         
            <div class="px-2 py-2 rounded bg-white hover:bg-gray-300">
               <a href="/trackcert">
                  <div class=" w-52 h-52">
                     <img class="scale-95 mx-auto w-52 h-52" src="../assets/images/trackcert.png">
                  </div>
                  <ion-label class="text-lg text-teal-400 font-bold block text-center uppercase">Track your Certificate</ion-label>
               </a>
            </div>

            <div class="px-2 py-2 rounded bg-white hover:bg-gray-300">
               <div class=" w-52 h-52">
                  <img class="scale-75 mx-auto w-52 h-52" src="../assets/images/editprofile.png">
               </div>
               <ion-label class="text-lg text-teal-400 font-bold block text-center uppercase">Edit Profile</ion-label>
            </div>
         </div>
  
      </div>
   </ion-content>
</template>
<script lang="ts">
   import { IonContent } from "@ionic/vue";
   import { defineComponent } from "vue";
   export default defineComponent({
     components: {
       IonContent,
     },
   });
</script>
<style scoped>
   .bg-orange-1 {
   --background: #ff9f1c;
   }
</style>