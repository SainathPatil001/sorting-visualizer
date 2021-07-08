let arrayContainer = document.querySelector(".array-container");
let btn = document.querySelector("#randomize");
let sort = document.querySelector("#sort");
const inputArraySize = document.querySelector(".inputArraySize");
const inputSpeed = document.querySelector(".inputSpeed");
let array = [];
inputArraySize.addEventListener("change", handleArraySize);
inputSpeed.addEventListener("change", handleSpeed);
let sortMethod = "";

function handleArraySize() {
  generateElements(this.value);
}

let buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => btn.addEventListener("click", handleClick));
function handleClick() {
  buttons.forEach((btn) => btn.classList.remove("selected"));
  this.classList.add("selected");
  sortMethod = this.getAttribute("data-value");
  console.log(sortMethod);
}

const input = document.querySelector("#range");
btn.addEventListener("click", () => {
  generateElements(input.value);
});

sort.addEventListener("click", handleSort);

async function handleSort() {
  if (sortMethod === "") {
    alert("None of the method Selected");
    return;
  }

  let buttons = document.querySelectorAll(".btn");
  const inputArraySize = document.querySelector(".inputArraySize");
  buttons.forEach((btn) => btn.setAttribute("disabled", "true"));
  inputArraySize.setAttribute("disabled", "true");
  sort.setAttribute("disabled","true")
    
  if(sortMethod=="bubbleSort")
  {
    bubbleSort();
  }

  if(sortMethod=="selectionSort")
  {
    selectionSort();
  }

  if(sortMethod=="insertionSort")
  {
    insertionSort();
  }

  if(sortMethod=="mergeSort")
  { 
     
     sortedArray=  mergeSort(array,0,array.length-1);
     let buttons = document.querySelectorAll(".btn");
     const inputArraySize = document.querySelector(".inputArraySize");
     buttons.forEach(btn=>btn.removeAttribute("disabled"))
     inputArraySize.removeAttribute("disabled");
     sort.removeAttribute("disabled");
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateElements(value) {
  arrayContainer.innerHTML = "";
  array = [];
  for (let i = 0; i < value; i++) {
    let element = document.createElement("div");
    element.setAttribute("id", i);
    element.style.height = `${randomNumber(10, 95)}%`;
    arrayContainer.appendChild(element);
    array.push(element);
  }
}

let timeout = 700;
function handleSpeed() {
  timeout = 1000 - this.value;
}

generateElements(15);
