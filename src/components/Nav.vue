
<script setup>

import useAuth from "../composable/useAuth";
const { isAuthenticated, logout } = useAuth();

</script>

<template>
<div class="bg-purple-400 text-indigo-500">
<div class="container mx-auto  justify-center py-4">  

<h1 class=" text-center tracking-tighter text-5xl font-thick">
Vue<span class="font-semibold text-gray-600">FakeAuth</span>
</h1>
<nav>
<ul class="space-x-6"><router-link to="/index">

<li class="bg-gray-400 text-lg py-2 px-2 hover:cursor-pointer text-center hover:bg-indigo-300 hover:text-orange-500"> Home</li></router-link> 
<router-link to="/About"><li class="bg-gray-400 tx-lg py-2 px-2 hover:cursor-pointer text-center hover:bg-indigo-300 hover:text-orange-500"> About</li></router-link> 
<router-link v-if="!isAuthenticated" to="/Login"><li class="bg-gray-400 tx-lg py-2 px-2 hover:cursor-pointer text-center hover:bg-indigo-300 hover:text-red-500"> Login</li></router-link> 

<router-link v-else to="/Secret"><li class="bg-gray-400 tx-lg py-2 px-2 hover:cursor-pointer text-center hover:bg-indigo-300 hover:text-red-500"> Secret</li></router-link> 
<button v-else @click="logout">
  <li class="bg-gray-400 tx-lg py-2 px-2 hover:cursor-pointer text-center hover:bg-indigo-300 hover:text-red-500"> Logout</li></button> 

</ul>


</nav>
</div>
</div>
</template>

