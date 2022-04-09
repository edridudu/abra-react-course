// Write a for loop that prints the number from 1 to 10.
// Write a for loop that prints all even numbers between 1 to 10
// Having an array of 10 elements such as : const arr = [5,4,3,2,1,5,4,3,2,1] print all elemnets
// print an array of 10 elements top to bottom
// write a function that print all items in an array until an item is 0


for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

const arr = [5, 4, 3, 2, 1, 5, 4, 3, 2, 1];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = arr2.length - 1; i >= 0; i--) {
    console.log(arr2[i]);
}

const arr3 = [1, 2, 3, 4, 5, 0, 7, 8, 9, 10];
for (let i = 0; i < arr3.length - 1; i++) {
    if (arr3[i] == 0) {
        break;
    }
    console.log(arr3[i]);
}


//write a while loop that get a number, increment it by 5 and multiple by 6. 
// For each iteration if the item is divided by 10 finish the loop and print the number
let num = 35;

while (true) {
    if (num % 10 == 0) {
        console.log(num);
        break;
    }
    num = num + 5;
    num = num * 6;
}


// write a function the receive an array of payments. The function should return the sum of all the payments in the array.
const calcPayments = (payments) => {
    let sum = 0;
    for (let i = 0; i < payments.length; i++) {
        sum += payments[i];
    }
    return sum;
}
console.log(calcPayments([1.2, 2.5, 3.7, 40.10, 5.800]));

// write function the receive the same array and will return the highest payment in the array
const calcHighestPayment = (payments) => {
    let highest = payments[0];
    for (let i = 0; i < payments.length; i++) {
        if (payments[i] > highest) {
            highest = payments[i];
        }
    }
    return highest;
}
console.log(calcHighestPayment([1.2, 2.5, 3.7, 40.10, 5.800]));

// write a function that simulate dice throwing. return a number between 1 to 6, The caller will print the dices and stop when the dice is 6.
// let dice=0;
// while(dice!=6){
//     dice=+1;
//     console.log(dice);
// }

// console.log(Math.random(6));

// Homework:


let arr9 = [
    [1, 2],
    [3, 4],
    [5, 6]
];


for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr9[i].length; j++) {
        console.log(arr9[i][j]);
    }
}
/* Write a function that receive an array and an element, the function should return the array while removing any of the element occurrence.
 */

/*
write a power of function which retrieve a number and power value. The output should be the power of that number. Use only loops.
*/

/* 
print the number of digits in a given number.
1000
*/

/*
write a function which retrieve the sum of all digits in a number
*/

/*
Write a function to retrieve the largest number in an array.
*/