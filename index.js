function findMinAndRemoveSorted(array){
  return array.shift()
}

function merge(arrayOne, arrayTwo){
  let sortedArray = []

  while(arrayOne.length != 0 && arrayTwo.length != 0){
    if(arrayOne[0] < arrayTwo[0]){
      sortedArray.push(findMinAndRemoveSorted(arrayOne))
    }else{
      sortedArray.push(findMinAndRemoveSorted(arrayTwo))
    }
  }
  return sortedArray.concat(arrayOne).concat(arrayTwo)
}

function mergeSort(unsorted){
  let midpoint = unsorted.length/2
  let firstHalf = unsorted.slice(0, midpoint)
  let secondHalf = unsorted.slice(midpoint, unsorted.length)

  if (unsorted.length<2){
    return unsorted
  }else{
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}
