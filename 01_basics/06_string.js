const name = "Smaran Rawal";
const age = 12;
// console.log(name);
// console.log(`Hello my name is ${name} and i am ${age} yeara old`);

const value = new String("smaran-ra rawal ");
console.log(value);

// console.log(value.charAt(4))
// console.log(value.charCodeAt(3))

console.log(name.concat(" ", value));
console.log(value.includes("smaran"));
console.log(value.lastIndexOf("-"));
console.log(value.repeat(3));
console.log(value.search("rawal"));
console.log(value.slice(4, 7));

const value2 = value.split(" ");
console.log(value2);

const value3='  smran   '
console.log(value3.trim());