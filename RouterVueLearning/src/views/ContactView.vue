
<script setup>
import {useRoute} from "vue-router"
import cars from "../data/car.json"

const route = useRoute()

const car = cars.find(c => c.id === parseInt(route.params.id))
</script>
<template>
    <div>
    <h1>Contact Infos</h1>
     <p>{{ car.contact.dealer }}</p> 
     <p>{{ car.contact.number }}</p>  
    </div>
   
</template>