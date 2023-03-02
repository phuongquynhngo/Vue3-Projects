<script setup>
import {RouterLink} from "vue-router"
</script>

<template>

  <div>
    <!-- <a href="/">Home</a>
    <a href="/about">About</a> -->

<!-- 
Not refresh Application  by using RouterLink -->
    <RouterLink active-class="active" to="/">Home</RouterLink>
    <RouterLink active-class="active" to="/about">About</RouterLink>

  </div>
</template>
<style scoped>
div {
  display: flex;
  flex-direction: column;
}

/* Styling the Active RouterLink */
.active {
    font-weight: 900;
    color: goldenrod;
}
</style>
