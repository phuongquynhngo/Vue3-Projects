<script setup>
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import Result from "../components/Result.vue";

import { useRoute } from "vue-router";
import { ref, watch, computed } from "vue";
import quizes from "../data/quizes.json";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id === quizId);
const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers =ref(0);
const showResult=ref(false)
// const questionStatus= ref(`${currentQuestionIndex.value}/${quiz.questions.length}`)

// watch (() => currentQuestionIndex.value, ()=>{
//   console.log("currentQuestionIndex has changed")
//   questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`
// })

// const questionStatus = computed(() => {
//   return `${currentQuestionIndex.value}/${quiz.questions.length}`;
// });

const questionStatus = computed(
  () => `${currentQuestionIndex.value}/${quiz.questions.length}`
);

// computed is used to derive a new value from existing reactive data, and it automatically
// caches the result so that it only needs to be recomputed when one of its dependencies changes.
// Computed properties are lazy by default, which means they only run when accessed, and they're
// typically used for simple transformations or filtering of data.

// watch, on the other hand, is used to perform a side effect when a reactive property
// changes. It's similar to a computed property in that it watches for changes in reactive
// data, but it's not used to derive a new value. Instead, it's used to perform actions
// like sending an HTTP request or updating a DOM element when data changes.

const barPercentage = computed(
  () => `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`
);


//calculate the number of correct Anwers and auto move on to the next question without 
//click on the "Next question"-button
const onOptionSlected=(isCorrect)=>{
  // console.log("isCorrect", isCorrect)
  if(isCorrect){
    numberOfCorrectAnswers.value++;
  }
  if(currentQuestionIndex.value===quiz.questions.length-1){
    showResult.value=true
  }
  currentQuestionIndex.value++;
}

</script>

<template>
  <div>
  <!-- {{ numberOfCorrectAnswers }} -->
    <QuizHeader
      :questionStatus="questionStatus"
      :barPercentage="barPercentage"
    />
    <div>
      <Question 
      v-if="!showResult"
      :question="quiz.questions[currentQuestionIndex]" 
      @selectOption="onOptionSlected" />
      <Result v-else
      :numberOfCorrectAnswers="numberOfCorrectAnswers"
      :quizQuestionsLength="quiz.questions.length"/>
    </div>
    <!-- <button @click="currentQuestionIndex++">Next question</button> -->

  </div>
</template>
