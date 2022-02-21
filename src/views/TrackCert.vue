<template>
   <ion-content :fullscreen="true">
    <div class="w-full h-screen">

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
       
        <div>
            <h3 class="pt-4 mt-6 font-semibold text-amber-400 text-3xl">Track Certificate</h3>
        </div>

        <div class="flex justify-evenly h-1/3">
            <ion-card class="rounded shadow w-1/3 px-2 py-2">         
              <ion-card-title class="bg-orange-500 text-white font-bold py-1.5 px-0.5 mt-1">Barangay Residency
                  <ion-icon :src="trash" class="absolute right-3"></ion-icon>  
              </ion-card-title>
              <div class="py-0.5 px-0.5">
              <ion-card-subtitle class="text-stone-900 pt-4 font-semibold">Name: <ion-text>Trexcy Fe M. Torrefiel</ion-text></ion-card-subtitle>
              <div class="pt-0.5">
                <ion-label class="text-stone-900 font-semibold"> Appointment Date: </ion-label>
                <ion-text class="text-stone-900 font-semibold">02/20/2022</ion-text>
              </div>
              <div class="pt-0.5">
                <ion-label class="text-stone-900 font-semibold">Status:</ion-label>
                <ion-text class="text-stone-900 font-semibold"> Approved</ion-text>
              </div>
              <div class="pt-0.5">
                <ion-label class="text-stone-900 font-semibold">Quantity:</ion-label>
                <ion-text class="text-stone-900 font-semibold"> 1 pc/s</ion-text>
              </div>
              </div>
              <div class="absolute bottom-3 right-3">
              <ion-button size="small" color="warning">Modify Information</ion-button>
              </div>
              
                
                
                
            </ion-card>
            <ion-card class="rounded shadow w-1/3 px-2 py-2">         
              <ion-card-title class="bg-orange-500 text-white font-bold py-1.5 px-0.5 mt-1">Barangay Residency
                  <ion-icon :src="trash" class="absolute right-3"></ion-icon>  
              </ion-card-title>
              <div class="py-0.5 px-0.5">
              <ion-card-subtitle class="text-stone-900 pt-4 font-semibold">Name: <ion-text>Trexcy Fe M. Torrefiel</ion-text></ion-card-subtitle>
              <div class="pt-0.5">
                <ion-label class="text-stone-900 font-semibold"> Appointment Date: </ion-label>
                <ion-text class="text-stone-900 font-semibold">02/20/2022</ion-text>
              </div>
              <div class="pt-0.5">
                <ion-label class="text-stone-900 font-semibold">Status:</ion-label>
                <ion-text class="text-stone-900 font-semibold"> Approved</ion-text>
              </div>
              <div class="pt-0.5">
                <ion-label class="text-stone-900 font-semibold">Quantity:</ion-label>
                <ion-text class="text-stone-900 font-semibold"> 1 pc/s</ion-text>
              </div>
              </div>
              <div class="absolute bottom-3 right-3">
              <ion-button size="small" color="warning">Modify Information</ion-button>
              </div>
              
                
                
                
            </ion-card>
        </div>
        <div class="flex justify-evenly h-1/3">
            <ion-card class="rounded shadow w-1/3 px-2 py-2">         
              <ion-card-title class="bg-orange-500 text-white font-bold py-1.5 px-0.5 mt-1">Barangay Residency
                  <ion-icon :src="trash" class="absolute right-3"></ion-icon>  
              </ion-card-title>
              <div class="py-0.5 px-0.5">
              <ion-card-subtitle class="text-stone-900 pt-4 font-semibold">Name: <ion-text>Trexcy Fe M. Torrefiel</ion-text></ion-card-subtitle>
              <div class="pt-0.5">
                <ion-label class="text-stone-900 font-semibold"> Appointment Date: </ion-label>
                <ion-text class="text-stone-900 font-semibold">02/20/2022</ion-text>
              </div>
              <div class="pt-0.5">
                <ion-label class="text-stone-900 font-semibold">Status:</ion-label>
                <ion-text class="text-stone-900 font-semibold"> Approved</ion-text>
              </div>
              <div class="pt-0.5">
                <ion-label class="text-stone-900 font-semibold">Quantity:</ion-label>
                <ion-text class="text-stone-900 font-semibold"> 1 pc/s</ion-text>
              </div>
              </div>
              <div class="absolute bottom-3 right-3">
              <ion-button size="small" color="warning">Modify Information</ion-button>
              </div>
              
                
                
                
            </ion-card>
            <ion-card class="rounded shadow w-1/3 px-2 py-2">         
              <ion-card-title class="bg-orange-500 text-white font-bold py-1.5 px-0.5 mt-1">Barangay Residency
                  <ion-icon :src="trash" class="absolute right-3"></ion-icon>  
              </ion-card-title>
              <div class="py-0.5 px-0.5">
              <ion-card-subtitle class="text-stone-900 pt-4 font-semibold">Name: <ion-text>Trexcy Fe M. Torrefiel</ion-text></ion-card-subtitle>
              <div class="pt-0.5">
                <ion-label class="text-stone-900 font-semibold"> Appointment Date: </ion-label>
                <ion-text class="text-stone-900 font-semibold">02/20/2022</ion-text>
              </div>
              <div class="pt-0.5">
                <ion-label class="text-stone-900 font-semibold">Status:</ion-label>
                <ion-text class="text-stone-900 font-semibold"> Approved</ion-text>
              </div>
              <div class="pt-0.5">
                <ion-label class="text-stone-900 font-semibold">Quantity:</ion-label>
                <ion-text class="text-stone-900 font-semibold"> 1 pc/s</ion-text>
              </div>
              </div>
              <div class="absolute bottom-3 right-3">
              <ion-button size="small" color="warning">Modify Information</ion-button>
              </div>
              
                
                
                
            </ion-card>
        </div>

      
    </div>     
   </ion-content>
</template>
<script lang="ts">
   import { IonContent } from "@ionic/vue";
   import { defineComponent } from "vue";
   import { trash} from "ionicons/icons";
  
   export default defineComponent({
     components: {
       IonContent,
     },
      setup() {
    return {
    trash
    };
      },
   });
</script>
