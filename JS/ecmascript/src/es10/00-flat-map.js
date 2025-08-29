const arr = [1,2,3,4, [1,2,3,4,4, [6,7,8]]]
console.log(arr.flat(3))

const sideArray = [1,2,3,4,5]
console.log(sideArray.flatMap(v => [v,v * 2]))