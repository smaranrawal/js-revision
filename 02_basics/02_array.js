const heros = ["sallman", "sharukh", "amir"];
const heroine = ["katrina", "kajol", "divorce"];

// heros.push(heroine);
// console.log(heros);

// const arry1 = heros.concat(heroine);
// console.log(arry1);

// const arry2 = [...heros, ...heroine];
// console.log(arry2);

const arry3 = [1, 2, [3, 4], [5, 6, [7, 8]]];
const realArry = arry3.flat(Infinity);
console.log(realArry);

console.log(Array.isArray("smaran"));
console.log(Array.from("Sallu"));
console.log(Array.from({ name: "smaran" }));

const a=12;
const b=13;
const c=14;

console.log(Array.of(a,b,c));
