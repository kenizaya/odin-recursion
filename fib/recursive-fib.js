// recursive
const fibsRec = (num) => {
  if (num < 1) return 0
  if (num === 1) return [0]
  if (num === 2) return [0, 1]

  const fibsArray = fibsRec(num - 1)

  return [...fibsArray, fibsArray[num - 2] + fibsArray[num - 3]]
}

console.log(fibsRec(0))
console.log(fibsRec(8))
