<template>
<ion-content class="bg">
<div class="grid min-h-screen place-items-center">
    <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
     <h1 class="text-xl font-semibold">Hello there 👋, <span class="font-normal">Please fill in your information to register</span></h1>
     <form class="mt-6">
        <div class="flex w-full">
            <div class="grid grid-cols-1 px-3 w-1/2">
                <ion-label class="block mt-2 text-xs font-semibold text-gray-600 uppercase">First Name</ion-label>
                <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="First Name" />
            </div>
            <div class="grid grid-cols-1 px-3 w-1/2">
                <ion-label class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Middle Name</ion-label>
                <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Middle Name" />
            </div>
        </div>
        <div class="flex w-full">
            <div class="grid grid-cols-1 px-3 w-1/2">
                <ion-label class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Last Name</ion-label>
                <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Last Name" />
            </div>
            <div class="grid grid-cols-1 px-3 w-1/2">
                <ion-label class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Suffix</ion-label>
                <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Suffix" />
            </div>
        </div>
        <div class="flex w-full">
            <div class="grid grid-cols-1 px-3 w-1/2">
                <ion-label class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Purok</ion-label>
                <ion-select class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Purok">
                    <ion-select-option>Riverside</ion-select-option>
                    <ion-select-option>Option 2</ion-select-option>
                    <ion-select-option>Option 3</ion-select-option>
                </ion-select>
            </div>
            <div class="grid grid-cols-1 px-3 w-1/2">
                <ion-label class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Admin Type</ion-label>
                <ion-select class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Admin Type">
                    <ion-select-option>Baranggay Admin</ion-select-option>
                    <ion-select-option>Purok Admin</ion-select-option>
                </ion-select>
            </div>
        </div>
        <div class="grid grid-cols-1 px-3 w-3/5">
            <ion-label class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Phone Number</ion-label>
            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Phone Number" />
        </div>
        <div class="grid grid-cols-1 px-3 w-1/2">
            <ion-label class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Position</ion-label>
            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Admin Position" />
        </div>
        
        <div class="grid grid-cols-1 px-3 w-3/5">
            <ion-label class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</ion-label>
            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Password" />
        </div>
        
        <div class="grid grid-cols-1 px-3 w-3/5">
            <ion-label class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Confirm Password</ion-label>
            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Confirm Password" />
        </div>

         <p class="w-full h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-5 text-center cursor-pointer text-xl text-white font-medium py-2">Sign Up</p>
         <p class="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Already registered?</p>
        
        
     </form>
    </div>
</div>

</ion-content>
</template>

<script lang="ts">
import { IonContent} from '@ionic/vue';
import { defineComponent } from 'vue';
import { calculator, lockClosed} from 'ionicons/icons';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent
  }, setup(){
    return{
      calculator,
      lockClosed
    }
  }
});
</script>

<style scoped>
.bg{
  --ion-background-color:#EFEFEF;
}

</style>
