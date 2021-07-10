function delay() {
  return new Promise((done) =>
    setTimeout(() => {
      done();
    }, timeout)
  );
}

async function insertionSort() {
  for (let i = 0; i < array.length; i++) {

     let idx=i;
    for (let j = i; j >= 1; j--) {
      await delay();
      array[idx].style.backgroundColor="purple"
      if (
        parseInt(array[j].style.height.substring(0, 2)) <
        parseInt(array[j - 1].style.height.substring(0, 2))
      ) {
          idx--;
        let temp = array[j].style.height;
        let temp1 = array[j].style.backgroundColor;
        array[j].style.height = array[j - 1].style.height;
        array[j].style.backgroundColor = array[j - 1].style.backgroundColor;
        array[j - 1].style.height = temp;
        array[j - 1].style.backgroundColor = temp1;
      } else {
        break;
      }
    }

    array[idx ].style.backgroundColor = "#00FA9A";
  }

  let buttons = document.querySelectorAll(".btn");
  const inputArraySize = document.querySelector(".inputArraySize");
  buttons.forEach(btn=>btn.removeAttribute("disabled"))
  inputArraySize.removeAttribute("disabled");
  sort.removeAttribute("disabled");
  const randomize = document.querySelector("#randomize");
  randomize.removeAttribute("disabled");

}
