let score = true;

// console.log(typeof score);

let numberConversion = Number(score);
// console.log(typeof numberConversion);
// console.log(numberConversion);

//"33 "=33
//"33aa" =>NaN
//true=1; false=0;

let isLogged = "kamina";
const booleanValue = Boolean(isLogged);
// console.log(booleanValue);
// console.log(typeof booleanValue);

// 1=true ,0 =false
//""=false ,"smam"=true

let num = 33;

let stringNum = Number(undefined);
console.log(stringNum);
console.log(typeof stringNum);

// --------------------operators------------------

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
