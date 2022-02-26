<template>
<div class="bg-blue-400 text-purple-900">
<div class="container mx-auto  justify-center py-4">  

<h1 class=" text-center tracking-tighter text-5xl font-thick">Lucy's
<span class="font-semibold text-gray-600"> Page </span>
</h1>
<nav>
<ul class="space-x-6"><router-link to="/Home">

<li class="bg-gray-400 text-lg py-4 px-4 hover:cursor-pointer text-center hover:bg-purple-500 hover:text-orange-500"> Home </li></router-link> 
<router-link to="/About"><li class="bg-gray-400 tx-lg py-3 px-4 hover:cursor-pointer text-center hover:bg-blue-500 hover:text-orange-500"> About</li></router-link> 
<router-link to="/Services"><li class="bg-gray-400 tx-lg py-3 px-4 hover:cursor-pointer text-center hover:bg-pink-500 hover:text-red-500"> Services</li></router-link> 
<router-link to="/Help"><li class="bg-gray-400 tx-lg py-3 px-4 hover:cursor-pointer text-center hover:bg-orange-500 h6over:text-red-500">Help</li></router-link> 
</ul>


</nav>
</div>
</div>
</template>