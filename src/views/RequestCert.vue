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
    <div class="flex ">
        <div class="w-1/4 mt-5 px-10">
            <ion-label class="font-bold text-amber-500 uppercase">Request Certificate</ion-label>  
            <div class="block mt-10  w-60">
                <ul class="whitespace-nowrap">
                <li class="bg-none hover:bg-teal-100 border border-gray-400 text-amber-500"><a href="/requestcert">Date and Time</a></li>
                <li class="bg-none hover:bg-teal-100 border border-gray-400 text-gray-500"><a href="/applicationcert">Application Information</a></li>
                <li class="bg-none hover:bg-teal-100 border border-gray-400 text-gray-500"><a href="/personalinfo">Verify Information</a></li>
                </ul>
            </div>
        </div>
        <div class="flex w-3/4 justify-around mt-5 px-5">
            <div class="">
                <ion-label class="font-bold text-amber-500 uppercase">Date</ion-label>
                <div class="grid grid-item">  
                        <ion-datetime presentation="date"   ></ion-datetime>
                </div>
            </div>
            <div class="">
                <ion-label class="font-bold text-amber-500 uppercase">Time</ion-label>
                <div class="grid-item ">
                    <ion-datetime presentation="time"></ion-datetime>
                </div>
            </div>
        </div>
    </div>
  </ion-content>
</template>
