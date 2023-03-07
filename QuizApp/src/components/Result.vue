<script setup>
import { defineProps } from "vue";

const { numberOfCorrectAnswers, quizQuestionsLength } = defineProps([
  "numberOfCorrectAnswers",
  "quizQuestionsLength",
]);
</script>

<template>
  <div class="results">
    <p>Your Results ...</p>
    <h1>{{ numberOfCorrectAnswers }}/{{ quizQuestionsLength }}</h1>
    <button>Go back</button>
  </div>
  
</template>

<style scoped>
.results {
  text-align: center;
  padding: 100px 0px;
}
p {
  font-size: 25px;
}
h1 {
  font-size: 48px;
}
</style>
