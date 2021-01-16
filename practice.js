/* 2.1 Will create a triangle of # symbols, ending with 7 triangles in the bottom row.

My solution: 
for (let triangle ="#"; triangle.length <= 7; triangle += "#") {
  console.log(triangle);
}

Their solution:
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

*/

/* 2.2 Will print numbers 1-100. If a number is divisible by 3, it will print "Fizz" in place of a number. If a number is divisible by 5, it will print "Buzz" in place of a number. If a number is divisible by both 3 and 5, it will print "FizzBuzz"

My solution:
for (number = 1; number <= 100; number +=1) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log("FizzBuzz");
    } else if (number % 3 === 0) {
      console.log("Fizz");
    } else if (number % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(number);
    }
  }

Their (clever) solution:
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz"; //Omiting braces?
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

*/

/* 2.3 Create checkerboard grid of # and spaces that is 8 characters long and 8 lines long. Peeked at solution to fix code up a bit and swap the hash and space, getting rid of the condition for the else statement. Also added an extra numberOfLines incrementor that made it increase by two each loop, resulting in only 4 lines.

My solution:
let string = ""

for (numberOfLines = 0; numberOfLines < 8; numberOfLines += 1) {
    for (numberOfChars = 0; numberOfChars < 8; numberOfChars += 1) {
        if (string.length % 2 === 0) {
          string += " ";
        } else {
          string += "#";
        }
    } 
    string += "\n";
}
console.log(string);

Their solution:
let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

*/
