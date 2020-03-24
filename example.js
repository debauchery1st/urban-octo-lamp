const Agent = require("./agent");

const alice = Agent("Alice");
const bob = Agent("Bob");
console.log("Example...");
alice.setTitle("Simple Shared State");
alice.start();
bob.start();
alice.receives(["snickers", "toilet-paper", "water"]);
console.log(alice.status());
console.log(bob.status());
setTimeout(() => {
  alice.gives("*", bob);
  console.log(alice.status());
  console.log(bob.status());
}, 10000);
setTimeout(() => {
  bob.gives("water", alice);
  console.log(alice.status());
  console.log(bob.status());
}, 20000);
setTimeout(() => {
  console.log("END");
}, 30000);
