function findMinAndRemoveSorted(array){
  return array.shift()
}

function findMinAndRemove(firstArray, secondArray){
  let firstMin = firstArray[0]
  let secondMin = secondArray[0]
  if (firstMin < secondMin){
    return findMinAndRemoveSorted(firstArray)
  }else{
    return findMinAndRemoveSorted(secondArray)
  }
}

function merge(firstArray, secondArray){
  let sorted = []
  let currentMin
  while(firstArray.length != 0 && secondArray.length != 0){
    currentMin = findMinAndRemove(firstArray, secondArray)
    sorted.push(currentMin)
  }
  return sorted.concat(firstArray).concat(secondArray)
}

function mergeSort(unsortedArray){
  let midpoint = unsortedArray.length/2
  let firstHalf = unsortedArray.slice(0,midpoint)
  let secondHalf = unsortedArray.slice(midpoint,unsortedArray.length)

  if(unsortedArray.length < 2){
    return unsortedArray
  }else{
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}
