// console.log("hello")
let count =0;
const countHeader = document.getElementById("count")

const countAddBtn = document.getElementById("add");
const countSubtractBtn = document.getElementById("subtract");

countHeader.innerText =count

countAddBtn.addEventListener("click" , () =>{
    count++;
    countHeader.innerText =count
    // console.log("hello from add button")
})

countSubtractBtn.addEventListener("click" , () =>{
    count--;
    countHeader.innerText =count
    // console.log("hello from subtract button")
})