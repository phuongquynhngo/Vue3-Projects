<script setup>
// import HomeView from "./views/HomeView.vue"
// import AboutView from "./views/AboutView.vue";

import { ref } from "vue";

// Adding Routing to Our App
import { RouterView } from "vue-router";

// RouterLink to Navigate Within the App
import Nav from "./components/Nav.vue";

const randomState = ref("");
</script>

<template>
  <div>
    {{ randomState }}
    <button @click="randomState = 'Hello'">Click me!</button>
    <Nav />
    <RouterView />
  </div>
</template>
