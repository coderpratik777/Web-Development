

// const arr=[1,2,3,4,5,6,7];

// for(let x of arr){
//   console.log(x);
// }


// const cars=new Map([
//   ["mercedes","2cr"],
//   ["audi","5cr"],
//   ["porsche","7cr"]
//   ]);
  
//   for(let x of cars){
//     console.log(x[0])
//   }
  
// const user={
//   "name":"pratik",
//   "age":21,
//   "city":"Nashik"
// }

// console.log(user.name);

// const {name,age,city,salary=10000}=user;

// console.log(name,salary);

// // array destructuring
// const arr=[1,2,3];
// const [first,second,third,fourth=5]=arr;
// console.log(fourth);

// const [x,...y]=arr;
// console.log(y);
// console.log(x);

// const cars={
//   "name":"mercedes",
//   "price":"23cr"
// }

// getCar(cars);

// function getCar({name,price})
// {
//   console.log(name,price)
// }

// //self invoking function

// (function(x,y){
//   console.log(x+y);
// })(10,20);

//array destructuring
var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];

let [a,b,c]=["Mercury",...planets];
console.log(a);
console.log(b);
console.log(c);

let [d,e,...f]=planets;
console.log(f);

let [first,second,third]=["mercury","earth",...planets];

console.log(first,second,third);

//closure


