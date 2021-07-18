/*
    --- Day 4: Secure Container ---
You arrive at the Venus fuel depot only to discover it's protected by a password. The Elves had written the password on a sticky note, but someone threw it out.

However, they do remember a few key facts about the password:

It is a six-digit number.
=> The value is within the range given in your puzzle input.
=> Two adjacent digits are the same (like 22 in 122345).
=> Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).

Other than the range rule, the following are true:

# 111111 meets these criteria (double 11, never decreases).
# 223450 does not meet these criteria (decreasing pair of digits 50).
# 123789 does not meet these criteria (no double).
How many different passwords within the range given in your puzzle input meet these criteria?
*/

const isNotDecreasing = (number) =>
  number
    .toString()
    .split("")
    .every((el, i, a) => {
      const prev = a[i - 1] || 0;
      return el >= prev;
    });

const hasAdjDuplicates = (number) =>
  number
    .toString()
    .split("")
    .some((el, i, a) => el == a[i - 1]);

function solve(range) {
  const left = range.split("-")[0];
  const right = range.split("-")[1];
  let part1 = 0;

  for (let i = left; i <= right; i++) {
    if (isNotDecreasing(i) && hasAdjDuplicates(i)) {
      part1 += 1;
    }
  }
  return part1;
}
console.log(solve("402328-864247"));

//===Case===
let a = 20;
console.log(a.toString()); // '20'
console.log((50).toString()); // '50'
//notDecreasing
console.log(isNotDecreasing(135679)); //true
console.log(isNotDecreasing(223450)); //false
//hasDUplicates
console.log(hasAdjDuplicates(122345)); //true
console.log(hasAdjDuplicates(123789)); //false
