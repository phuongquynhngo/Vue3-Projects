<script setup>
import { defineProps } from "vue";
const { quiz } = defineProps(["quiz"]);
// Passing Props to the Question Component

// console.log(quiz);
</script>

<template>
  <!-- <div v-for="quiz in quizes" :key="quiz.id" class="card">
        <img
          :src="quiz.img"
          alt=""
        />
        <div class="card-text">
          <h2>{{quiz.name }}</h2>
          <p>{{ quiz.questions.length }} questions</p>
        </div> -->
  <div class="card">
    <img :src="quiz.img" alt="" />
    <div class="card-text">
      <h2>{{ quiz.name }}</h2>
      <p>{{ quiz.questions.length }} questions</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 300px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
}
.card img {
  width: 100%;
  padding: 10px;
  margin: 0;
}
.card .card-text {
  padding: 0 5px;
}
.card .card-text h2 {
  font-weight: bold;
}
</style>
