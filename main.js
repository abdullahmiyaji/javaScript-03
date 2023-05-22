/*Assignments-03
Q-1.. Find GPA and Grade with respect to Marks in any subject
*/

let marks = 30;

if (marks >= 90 && marks <= 100) {
      console.log(`your Marks is = ${marks}  and Grade is = A+`)
}
else if (marks >= 80 && marks <= 89) {
      console.log(`your Marks is = ${marks}  and Grade is = A`)
}
else if (marks >= 70 && marks <= 79) {
      console.log(`your Marks is = ${marks}  and Grade is = A-`)
}
else if (marks >= 60 && marks <= 69) {
      console.log(`your Marks is = ${marks}   and Grade is = B`)
}
else if (marks >= 50 && marks <= 59) {
      console.log(`your Marks is = ${marks}  and Grade is = C`)
}
else if (marks >= 33 && marks <= 49) {
      console.log(`your Marks is = ${marks}  and Grade is = D`)
}
else if (marks >= 0 && marks <= 32) {
      console.log(`your Marks is = ${marks} and Grade is F`)
} else {
      console.log("wrong number")
} 

//Q-2
// Create a loop that will rotate from 1000 to 300

for (let i = 1000; i >= 300; i= i-100) {
      console.log(i);
    }

//    Q-3
//     Find the even and odd numbers from 1 and 1000 through for loop
// Even Number
for (let i = 0; i <= 1000; i++) {
      if(i % 2 == 0){
            console.log(i);
      }
}
// Odd number
for (let i = 1; i <= 100; i++) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
//    Q-4
// Find the number divisible by 7 between 1 and 1000

    for (let i = 1; i <= 1000; i++) {
      if (i % 7 === 0) {
        console.log(i);
      }
    }

// Q-5
//     Create a loop using “for” that will increment by 3 per step and break the loop when it finds a number divisible by 11
for (let i = 3; ; i = i + 3) {
      if (i % 11 === 0) {
        break;
      }
      console.log(i);
    }
   
// Q-6
// Create a loop that rotates 500 times using the for loop where you just pull out the numbers divisible by 3 and 4
let count = 0;
for (let i = 1; count < 500; i++) {
  if (i % 3 === 0 && i % 4 === 0) {
    console.log(i);
    count++;
  }
}
 
// Q-7
// Create a loop where the initial value is 10,000. You need to rotate the loop 50 times by using the increment and decrement operators twice.
// increment
for (let i = 10000; i <= 10050; i++) {
      console.log(i);
}

// decrement
;
for (let i = 10050; i >= 10000; i--) {
      console.log(i);
}