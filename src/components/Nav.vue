
<script setup>
import { useRouter } from "vue-router";
import useAuth from "../composable/useAuth";
const { isAuthenticated, logout } = useAuth();

const router = useRouter();
const loggingOut = () => {
  logout();
  router.push("/");
};

</script>

<template>
<div class="bg-purple-400 text-indigo-500">
<div class="container flex items-center  justify-between mx-auto">  

<h1 class=" tracking-tighter text-5xl font-thick">
Vue<span class="font-semibold text-gray-600">FakeAuth</span>
</h1>
<nav>
<ul class="flex space-x-4"><router-link to="/">

<li class="py-8 px-4 hover:cursor-pointer  hover:bg-indigo-300 hover:text-orange-500"> Home</li></router-link> 
<router-link to="/About"><li class="px-4 py-8 hover:cursor-pointer hover:bg-indigo-300 hover:text-orange-500"> About</li></router-link> 
<router-link v-if="!isAuthenticated" to="/Login"><li class="bg-gray-400 px-4 py-8 hover:cursor-pointer hover:bg-indigo-300 hover:text-red-500"> Login</li></router-link> 
<div v-else class="flex">
<router-link  to="/Secret"><li class="px-4 py-8 hover:cursor-pointer hover:bg-indigo-300 hover:text-red-500"> Secret</li></router-link> 

<button  @click="loggingOut">
<li class=" px-6 py-8 hover:cursor-pointer hover:bg-indigo-300 hover:text-red-500"> Logout</li></button>


</div>
</ul>


</nav>
</div>
</div>
</template>

