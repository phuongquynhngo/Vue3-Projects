<script setup>
// extract id from the  path
import {useRoute, RouterView} from "vue-router"
import cars from "../data/car.json"
import ContactView from "./ContactView.vue";

const route = useRoute()

const car = cars.find(c => c.id === parseInt(route.params.id))

console.log(route.params)
</script>

<template>
    <div>
        <h1>Car View</h1>
        {{ car }}
        <p>{{ car.name }}</p>
        <p>{{ car.year }}</p>
        <p>{{ car.price }}</p>
        <RouterView/>
    </div>
</template>