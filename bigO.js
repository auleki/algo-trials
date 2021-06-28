const uniqueSlow = array => {
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    const ele = array[i]
    if (!newArray.includes(ele)) {
      newArray.push(ele)
    }
  }
  return newArray
}

const uniqueFast = array => {
  const onlyUniques = new Set()
  for (let i = 0; i < array.length; i++) {
    const ele = array[i]
    onlyUniques.add(ele)
  }
  return Array.from(onlyUniques)
}

const randomArray = []
const loopLength = 1500
for (let i = 0; i < loopLength; i++) {
  const randomNumber = Math.floor(Math.random() * loopLength)
  randomArray.push(randomNumber)
}

const startSlow = new Date()
console.log(uniqueSlow(randomArray))
const endSlow = new Date()
console.log(`slow n^2 finished in ${endSlow - startSlow}ms.`)

const startFast = new Date()
console.log(uniqueFast(randomArray))
const endFast = new Date()
console.log(`fast n finished in ${endFast - startFast}ms.`)

/* 

1. divide n by base 
2. update value of argument with result
3. increment counter
4. if arg value is less than or equal to one, finish

*/
console.log('-----------------------------')
const findLog = (base, num) => {
  let logValue = 0
  let argValue = num
  while (argValue >= 1) {
    argValue /= base
    logValue++
    console.log('Log Value now ' + logValue)
  }
  return `Log Value is ${logValue}`
}

const gaga = n => {
  if (n <= 1) {
    console.log('hooray')
    return
  }
  console.log(n)
  gaga(n / 2)
}
gaga(30)
