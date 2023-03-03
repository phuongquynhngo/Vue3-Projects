<script setup>
// extract id from the  path
import {useRoute,useRouter, RouterView} from "vue-router"
import cars from "../data/car.json"

// the useRoute composable: extract information about this path
const route = useRoute()

//the useRouteer composable: adjust the path
const router =useRouter()
console.log(router)

const carId =parseInt(route.params.id)
const car = cars.find(c => c.id === carId )

console.log(route.params)

const showContact = () =>{
    if (carId === 3) return;
    // does not show contact info when car id is 3
    return router.push(`/cars/${carId}/contact`)
}


</script>

<template>
    <div v-if="car">
        <h1>Car View</h1>
        {{ car }}
        <p>{{ car.name }}</p>
        <p>{{ car.year }}</p>
        <p>{{ car.price }}</p>


        <!-- <button @click="router.push(`/cars/${carId}/contact`)">Click for contact</button> -->
        <button @click="showContact">Click for contact</button>
        
        <RouterView/>
    </div>
    <div v-else>
    <h1>Car not found</h1></div>
</template>