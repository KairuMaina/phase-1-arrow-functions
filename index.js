const add = function(num1, num2) {
    return num1 + num2;
  };
  console.log(add(5, 7)); // Output: 12

  
  const square = num => num ** 2;
console.log(square(4)); // Output: 16


const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]

const names = ["alice", "bob", "charlie"];
const uppercasedNames = names.map(name => name.toUpperCase());
console.log(uppercasedNames); // Output: ["ALICE", "BOB", "CHARLIE"]


