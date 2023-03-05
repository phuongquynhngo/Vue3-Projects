<script setup>
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import {useRoute} from "vue-router";

const route=useRoute()

const quizId= parseInt(route.params.id)
</script>
<template>
  <div>

  {{ quizId }}
    <QuizHeader />
    <div>
      <Question />
    </div>
  </div>
</template>
