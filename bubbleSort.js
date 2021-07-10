

function delay() {
  return new Promise((done) =>
    setTimeout(() => {
      done();
    }, timeout)
  );
}

async function bubbleSort() {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {

      console.log("in a loop");
      await delay();
      if (j >= 1) {
        array[j].style.backgroundColor = "#00bfff";
        array[j - 1].style.backgroundColor = "#00bfff";
      }
      array[j].style.backgroundColor = "red";
      array[j + 1].style.backgroundColor = "red";
      await delay();
      let num1 = parseInt(array[j].style.height.substring(0, 2));
      let num2 = parseInt(array[j + 1].style.height.substring(0, 2));

      if (num1 > num2) {
        array[j].style.height = `${num2}%`;
        array[j + 1].style.height = `${num1}%`;
        await delay();
      }

      if (j == array.length - 2 - i) {
        await delay();

        array[j].style.backgroundColor = "#00bfff";
        array[j + 1].style.backgroundColor = "#00bfff";
        console.log("i m trigged");
      }

      if (j == array.length - i - 2) {
        if (j == 0) {
          array[j].style.backgroundColor = "#00FA9A";
          let buttons = document.querySelectorAll(".btn");
          const inputArraySize = document.querySelector(".inputArraySize");
          buttons.forEach(btn=>btn.removeAttribute("disabled"))
          inputArraySize.removeAttribute("disabled");
          sort.removeAttribute("disabled");
          const randomize = document.querySelector("#randomize");
          randomize.removeAttribute("disabled");
          console.log("Berlin");
        
        }
        array[j + 1].style.backgroundColor = "#00FA9A";
      }
    }
  }
}