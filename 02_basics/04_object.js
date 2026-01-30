// const obj=new Object();

const obj = {};

obj.id = "1";
obj.name = "Smaran";

// console.log(obj);
// console.log(Object.hasOwn(obj,"id")); //is to validate this object contain the properties or not

// const obj1 = { a: "1", b: "2" };
// const obj2 = { c: "3", d: "4" };
// console.log(Object.assign(obj1, obj2));

// const multi = {
//   email: "sohan@gmail.com",
//   fullname: { username: { name: "smaran" ,id:"123"} },
// };

// console.log(multi.fullname.username.name)

const user = [
  { id: "1", name: "sohan" },
  { id: "1", name: "sohan" },
  { id: "1", name: "sohan" },
  { id: "1", name: "sohan" },
];

console.log(user[1].name);
console.log(Object.keys(obj));
// console.log(Object.values(user));
console.log(Object.entries(obj));

const user1 = { name: "smaran", email: "smaran@gmail.com", address: "Tikapur" };

const {name:username,email}=user1;
console.log(username,email);