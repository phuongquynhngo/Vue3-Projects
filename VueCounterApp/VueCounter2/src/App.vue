<!--
Composition API
-->

<script setup>
// define count as a piece of state inorder for ui to rerender the html 
import {ref} from "vue"
const count = ref(0);

const addToCount = () => {
  console.log("Hello from Add Composition")
  count.value = count.value + 1;
};

const subtractFromCount = () => {
  console.log("Hello from Subtract Composition")
  count.value = count.value - 1;
};
</script>


<!-- 
  Options API
 

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addToCount() {
      console.log("Hello from Add")
      this.count = this.count+1
    },
    subtractFromCount() {
      console.log("Hello from Subtract"),
      this.count = this.count - 1
    },
  },
};
</script>
-->

<template>
  <main>
    <div>
      <h4>The current count is ....</h4>
      <h1>{{ count }}</h1>
      <!-- <h1>0</h1> -->
      <button @click="subtractFromCount()">-</button>
      <button @click="addToCount()">+</button>
    </div>
  </main>
</template>
<style scoped>
main {
  background-color: aliceblue;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
div {
  text-align: center;
}
</style>
