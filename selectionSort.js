function delay() {
  return new Promise((done) =>
    setTimeout(() => {
      done();
    }, timeout)
  );
}

async function selectionSort() {
  for (let i = 0; i < array.length - 1; i++) {
    let minIdx = i;
    array[minIdx].style.backgroundColor = "purple";
    for (let j = i + 1; j < array.length; j++) {
      console.log("in a loop");
      await delay();

      if(array[j-1].style.backgroundColor ==="red")
      {
        array[j-1].style.backgroundColor = "#00bfff";

      }
      array[j].style.backgroundColor = "red";

      if (
        parseInt(array[j].style.height.substring(0, 2)) <
        parseInt(array[minIdx].style.height.substring(0, 2))
      ) {
        await delay();
        array[minIdx].style.backgroundColor = "#00bfff";
        minIdx = j;
        array[minIdx].style.backgroundColor = "purple";
      }

      if(j==array.length-1)
      {
        await delay();
        array[j].style.backgroundColor = "#00bfff";

      }


    }

    await delay();

    let temp = array[i].style.height;
    array[i].style.height = array[minIdx].style.height;
    array[minIdx].style.height = temp;
        array[minIdx].style.backgroundColor="#00bfff"
    array[i].style.backgroundColor="#00FA9A"

    if(i==array.length-2){
      
    array[i+1].style.backgroundColor="#00FA9A"
    let buttons = document.querySelectorAll(".btn");
          const inputArraySize = document.querySelector(".inputArraySize");
          buttons.forEach(btn=>btn.removeAttribute("disabled"))
          inputArraySize.removeAttribute("disabled");
          sort.removeAttribute("disabled");
          const randomize = document.querySelector("#randomize");
          randomize.removeAttribute("disabled");

    }
    await delay();
  }
}
