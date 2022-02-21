<template>
  <ion-content :fullscreen="true">
    <div class="bg-white flex flex-col font-sans">
        <div class="w-screen shadow-md"> 
            <div class="container mx-auto px-8">
                <header class="flex flex-col sm:flex-row items-center justify-between relative">
                    <img class="scale-75 " src="../assets/images/tinago.png">
                    <nav class="hidden md:flex text-lg">
                    <a href="#" class="text-gray-800 hover:text-teal-400 py-3 px-6">Home</a>
                    <a href="#" class="text-gray-800 hover:text-teal-400 py-3 px-6">Requirements</a>
                    <a href="#" class="text-gray-800 hover:text-teal-400 py-3 px-6">Schedule an Appointment</a>
                    <a href="#" class="bg-amber-500 hover:bg-teal-300 rounded-full uppercase text-white py-3 px-6">Log out</a>
                    </nav>
                </header>
            </div>
        </div>
    </div>
    <div class="flex">
        <div class="w-1/4 mt-5 px-10">
            <ion-label class="font-bold text-amber-500 uppercase">Request Certificate</ion-label>  
            <div class="block mt-10  w-60">
                <ul class="whitespace-nowrap">
                <li class="bg-none hover:bg-teal-100 border border-gray-400 text-gray-500"><a href="/requestcert">Date and Time</a></li>
                <li class="bg-none hover:bg-teal-100 border border-gray-400 text-amber-500"><a href="/applicationcert">Application Information</a></li>
                <li class="bg-none hover:bg-teal-100 border border-gray-400 text-gray-500"><a href="/personalinfo">Verify Information</a></li>
                </ul>
            </div>
        </div>
        <div class="w-3/4 h-screen">
            <div class="mt-5">
                <ion-label class="font-bold text-amber-500 uppercase">Application Information</ion-label>
            </div>
            <div class="flex px-5">
                <div class="w-full flex">
                    <ion-item class="w-3/4">
                        <ion-label>Certificate Type</ion-label>
                        <ion-select :value = "ctype" @ionChange = "ctype=$event.target.value" interface="popover">
                            <ion-select-option value= "BARANGAY CLEARANCE">BARANGAY CLEARANCE</ion-select-option>
                            <ion-select-option value= "BUSINESS PERMIT">BUSINESS PERMIT</ion-select-option>
                            <ion-select-option value= "CERTIFICATE OF INDIGENCY">CERTIFICATE OF INDIGENCY</ion-select-option>
                            <ion-select-option value= "CERTIFICATE OF RESIDENCY">CERTIFICATE OF RESIDENCY</ion-select-option>
                        </ion-select>
                    </ion-item>
                    <ion-button @click = "SelectCert" class="mx-3 border" >Continue</ion-button>
                </div>
            </div>
            <div v-if= "BrgyClearance" class="mt-3 px-5 w-full h-3/4 ">
                <div class="w-full h-1/5 bg-teal-100 rounded">
                    <p class="font-bold text-blue-700 pt-3 ml-5 text-lg">Barangay Clearance</p>
                    <p class="font-bold text-neutral-800 pt-1 ml-10 text-base">Issued identification documents neededd for many important business job or personal transactions.</p>
                </div>
                <div class="mt-5 w-full h-3/4 rounded border-2">
                    <div class="text-center">
                        <p class="font-bold text-amber-500 pt-3 ml-5 text-lg">Please provide all the information below</p>
                    </div>
                    <div class="flex mt-5">
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">First Name</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="First Name" />
                        </div>
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Midle Name</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Middle Name" />
                        </div>
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Last Name</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Last Name" />
                        </div>
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Suffix</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Suffix" />
                        </div>
                    </div>
                    <div class="flex mt-5">
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Purok</ion-label>
                            <ion-select class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Purok">
                                <ion-select-option>Riverside</ion-select-option>
                                <ion-select-option>Option 2</ion-select-option>
                                <ion-select-option>Option 3</ion-select-option>
                            </ion-select>
                        </div>
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Citizenship</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Citizenship" />
                        </div>
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Status</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Status" />
                        </div>
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Age</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Age" />
                        </div>
                    </div>
                    <div class="flex mt-5">
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Quantity</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="pcs" />
                        </div>
                        <div class="absolute right-32 mt-10">
                            <ion-button class="mx-5 border ">Back</ion-button>
                            <ion-button class="mx-5  border">Request</ion-button>
                        </div>
                    </div>
                </div>
            </div> 
            <div v-if= "BrgyPermit" class="mt-3 px-5 w-full h-3/4 ">
                <div class=" w-full h-1/5 bg-teal-100 rounded">
                    <p class="font-bold text-blue-700 pt-3 ml-5 text-lg">Barangay Permit</p>
                    <p class="font-bold text-neutral-800 pt-1 ml-10 text-base">This certifies that your business complies with the requirements of the barangay where your business operates.</p>
                </div>
                <div class="relative mt-5 w-full h-3/4 rounded border-2">
                    <div class="text-center">
                        <p class="font-bold text-amber-500 pt-3 ml-5 text-lg">Please provide all the information below</p>
                    </div>
                    <div class="flex mt-5">
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">First Name</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="First Name" />
                        </div>
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Midle Name</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Middle Name" />
                        </div>
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Last Name</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Last Name" />
                        </div>
                        <div class="grid grid-cols-1 px-3  w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Suffix</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Suffix" />
                        </div>
                    </div>
                    <div class="flex mt-5">
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Business Name</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Business Name"/>
                        </div>
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Venue</ion-label>
                            <ion-select class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Venue of Business">
                                <ion-select-option>Riverside</ion-select-option>
                                <ion-select-option>Option 2</ion-select-option>
                                <ion-select-option>Option 3</ion-select-option>
                            </ion-select>
                        </div>
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Nature</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Nature of Business" />
                        </div>
                    </div>
                    <div class="flex mt-5">
                        <div class="grid grid-cols-1 px-3">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Effectivity</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Effectivity Date" />
                        </div>
                        <div class="absolute right-32 mt-10">
                            <ion-button class="mx-5 border ">Back</ion-button>
                            <ion-button class="mx-5  border">Request</ion-button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if= "Residency" class="mt-3 px-5 w-full h-3/4 ">
                <div class="w-full h-1/5 bg-teal-100 rounded ">
                    <p class="font-bold text-blue-700 pt-3 ml-5 text-lg">Certificate of Residency</p>
                    <p class="font-bold text-neutral-800 pt-1 ml-10 text-base">One of the documents required to apply jobs or open a bank account.</p>
                </div>
                <div class="mt-5 w-full h-3/4 rounded border-2">
                    <div class="text-center">
                        <p class="font-bold text-amber-500 pt-3 ml-5 text-lg">Please provide all the information below</p>
                    </div>
                    <div class="flex mt-5">
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">First Name</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="First Name" />
                        </div>
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Midle Name</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Middle Name" />
                        </div>
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Last Name</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Last Name" />
                        </div>
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Suffix</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Suffix" />
                        </div>
                    </div>
                    <div class="flex mt-5">
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Purok</ion-label>
                            <ion-select class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Purok">
                                <ion-select-option>Riverside</ion-select-option>
                                <ion-select-option>Option 2</ion-select-option>
                                <ion-select-option>Option 3</ion-select-option>
                            </ion-select>
                        </div>
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Citizenship</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Citizenship" />
                        </div>
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Status</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Status" />
                        </div>
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Age</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Age" />
                        </div>
                    </div>
                    <div class="flex mt-5">
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Quantity</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="pcs" />
                        </div>
                        <div class="absolute right-32 mt-10">
                            <ion-button class="mx-5 border ">Back</ion-button>
                            <ion-button class="mx-5  border">Request</ion-button>
                        </div>
                    </div>
                
                </div>
            </div>
            <div v-if= "Indigency" class="mt-3 px-5 w-full h-3/4 ">
                <div class="w-full h-1/5 bg-teal-100 rounded">
                    <p class="font-bold text-blue-700 pt-3 ml-5 text-lg">Certificate of Indigency</p>
                    <p class="font-bold text-neutral-800 pt-1 ml-10 text-base">One of the requirements to avail charitable institutions, government and non-government organizationsfor legal assistance.</p>
                </div>
                <div class="mt-5 w-full h-3/4 rounded border-2">
                    <div class="text-center">
                        <p class="font-bold text-amber-500 pt-3 ml-5 text-lg">Please provide all the information below</p>
                    </div>
                    <div class="flex mt-5">
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">First Name</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="First Name" />
                        </div>
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Midle Name</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Middle Name" />
                        </div>
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Last Name</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Last Name" />
                        </div>
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Suffix</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Suffix" />
                        </div>
                    </div>
                    <div class="flex mt-5">
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Purok</ion-label>
                            <ion-select class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Purok">
                                <ion-select-option>Riverside</ion-select-option>
                                <ion-select-option>Option 2</ion-select-option>
                                <ion-select-option>Option 3</ion-select-option>
                            </ion-select>
                        </div>
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Citizenship</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Citizenship" />
                        </div>
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Status</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Status" />
                        </div>
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Age</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Age" />
                        </div>
                    </div>
                    <div class="flex mt-5">
                        <div class="grid grid-cols-1 px-3 w-1/4">
                            <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Quantity</ion-label>
                            <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="pcs" />
                        </div>
                        <div class="absolute right-32 mt-10">
                            <ion-button class="mx-5 border ">Back</ion-button>
                            <ion-button class="mx-5  border">Request</ion-button>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
  </ion-content>
</template>

<script lang="ts">
import { IonContent, IonLabel, IonSelect,toastController,IonButton,IonInput } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ApplicationCert',
  components: {
    IonContent, 
    IonLabel,
    IonSelect,
    IonButton,
    IonInput
  }, 
  data(){
      return{
        ctype:'',
        BrgyClearance: false,
        BrgyPermit: false,
        Residency: false,
        Indigency: false 
      }
  },
  methods:{
      SelectCert(){
          if(this.ctype=='BARANGAY CLEARANCE'){
              this.BrgyClearance=true;
              this.BrgyPermit=false;
              this.Indigency=false;
              this.Residency=false;
          }
          else if (this.ctype=='BUSINESS PERMIT'){
              this.BrgyClearance=false;
              this.BrgyPermit=true;
              this.Indigency=false;
              this.Residency=false;
          }
          else if (this.ctype=='CERTIFICATE OF INDIGENCY'){
              this.BrgyClearance=false;
              this.BrgyPermit=false;
              this.Indigency=true;
              this.Residency=false;
          }
          else if (this.ctype=='CERTIFICATE OF RESIDENCY'){
              this.BrgyClearance=false;
              this.BrgyPermit=false;
              this.Indigency=false;
              this.Residency=true;
          }
          
      }
  }
});
</script>