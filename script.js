// // let btn = document.getElementById(".btn");
let num = document.getElementById("num");
// let resetBtn = document.getElementById("rst-btn");


let count = 0;

function reset() {
    count = 0;
    num.innerText = count;
  }
  

function increment() {
  count++;
  num.innerText = count;
}

function decrement() {
    count--;
    num.innerText = count;
  }

