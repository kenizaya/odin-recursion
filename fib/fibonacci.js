// iterative
const fibs = (num) => {
  const fibsArray = []

  if (num >= 0) fibsArray.push(0)
  if (num >= 1) fibsArray.push(1)

  for (let i = 2; i < num; i++) {
    let prev = fibsArray[fibsArray.length - 2]
    let current = fibsArray[fibsArray.length - 1]
    fibsArray.push(prev + current)
  }

  return fibsArray
}

console.log(fibs(8))
