<script setup>
import useAuth from "../composable/useAuth";
const { isAuthenticated, user } = useAuth();
</script>

<template>
  <div
    class="flex flex-col items-center justify-center py-24"
  >
    <h2
      v-if="!isAuthenticated"
      class="text-6xl py-20 px-10 tracking-tighter font-weight-300"
    >
      Welcome
    </h2>
    <h2 v-else class="text-6xl py-20 px-10 tracking-tighter font-weight-300">
      Welcome {{ user }}
    </h2>
    <img src="../assets/bgindex.png" alt="Hello BG" />
  </div>
</template>

 
