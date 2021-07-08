function delay() {
  return new Promise((done) =>
    setTimeout(() => {
      done();
    }, timeout)
  );
}
   function mergeSort(array, l, h) {
  if (l == h) {
    let barr = [];
    barr.push(array[l]);
    return barr;
  }
  let m = parseInt((l + h) / 2);
  let firstHalf = mergeSort(array, l, m);
  let secondHalf = mergeSort(array, m + 1, h);
  


  let sortedArray = merge(firstHalf, secondHalf);
 
   for(let i =0;i<sortedArray.length;i++) {
     sortedArray[i].style.backgroundColor="#00FA9A"
   }
  return sortedArray;
}

 function merge(firstHalf, secondHalf) {
  let i = 0,
    j = 0;
  let sortedArray = []; 

    while (i < firstHalf.length ) {
      if (
        parseInt(firstHalf[i].style.height) < parseInt(secondHalf[j].style.height)
      ) {
        i++;
      }
      else
      {
        let temp=firstHalf[i].style.height;
        firstHalf[i].style.height=secondHalf[0].style.height;
        secondHalf[0].style.height=temp;
         
        let idx=0;
         while(idx<secondHalf.length-1)
         {
           if( parseInt(secondHalf[idx+1].style.height)<parseInt(secondHalf[idx].style.height))
           {
            let temp=secondHalf[idx+1].style.height;
            secondHalf[idx+1].style.height=secondHalf[idx].style.height;
            secondHalf[idx].style.height=temp;
            idx++;
           }
  
           else
           {
  
             break;
           }
  
           
         }
  
         i++;
      }
  
    }
    
    i=0;
    j=0;
    while(i<firstHalf.length)
    {
      sortedArray.push(firstHalf[i]);
      i++;
    }
  
    while(j<secondHalf.length)
    {
      sortedArray.push(secondHalf[j]);
      j++;
    }

  return sortedArray;
}
