const mergeSort = (arr) => {
  if (arr.length < 2) return arr

  let arrA = mergeSort(arr.slice(0, arr.length / 2))
  let arrB = mergeSort(arr.slice(arr.length / 2))
  return merge(arrA, arrB)
}

const merge = (arrA, arrB) => {
  const mergedArray = []
  let indexA = 0
  let indexB = 0

  while (indexA < arrA.length && indexB < arrB.length) {
    if (arrA[indexA] < arrB[indexB]) {
      mergedArray.push(arrA[indexA])
      indexA++
    } else {
      mergedArray.push(arrB[indexB])
      indexB++
    }
  }

  if (indexA === arrA.length) mergedArray.push(...arrB.slice(indexB))
  if (indexB === arrB.length) mergedArray.push(...arrA.slice(indexA))

  return mergedArray
}

console.log(mergeSort([176, 724, 532, 61, 173])) // [ 61, 173, 176, 532, 724 ]

console.log(mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

console.log(mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
