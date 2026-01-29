const array = [1, 2, 3, 4, 5, 6];
const arry = new Array(8, 9, 10, 11, 12, 13);
// console.log(arry)

// console.log(array)
// console.log(array.push(10));
// console.log(array)
// array.pop()
// console.log(array)

// console.log(array.join());
// console.log(array)


console.log(array.shift());
console.log(array)

console.log(array.unshift(9))
console.log(array)


//slice and splice


const arry1 = [1, 2, 3, 4, 5];
console.log("original array ", arry1);
console.log(arry1.slice(1, 3));
console.log("after slice", arry1);

console.log(arry1.splice(1, 3));
console.log("after splice", arry1);

//main differene detween slice and splice is that splice changes the original array but slicce doesnot
