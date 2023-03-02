<script setup>
import cars from "../data/car.json";
import {RouterLink} from "vue-router"
</script>

<template>
  <div>
    <h1>Home View</h1>
    <div class="cars">
      <RouterLink v-for="car in cars" :key="car.id" :to="`/cars/${car.id}`"> {{ car.name }}</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.cars {
  display: flex;
}
.cars a {
  text-decoration: none;
  color: black;
  width: 100%;
  margin: 10px ;
  padding: 15px;
  box-shadow: 1px 1px 10px;
  text-align: center;
}
</style>
