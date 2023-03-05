<template>
  <div class="question-container">
    <h1 class="question">What is the chemical value of table salt?</h1>
  </div>

  <div class="options-container">
    <div class="option">
      <p class="option-label">A</p>
      <div class="option-value">
        <p>NaCl</p>
      </div>
    </div>
    <div class="option">
      <p class="option-label">B</p>
      <div class="option-value">
        <p>NaCl</p>
      </div>
    </div>
    <div class="option">
      <p class="option-label">C</p>
      <div class="option-value">
        <p>NaCl</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.question-container{
  margin-top: 20px;
}
.question{
  font-size: 40px;
  margin-bottom: 20px;
}

.option{
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
}
.option-label{
  background-color: bisque;
  font-size: 30px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.option-value{
  background-color: rgb(221,239,239);
  width: 100%;
  font-size: 30px;
  padding: 0 20px;
}
</style>
