// Verbal Questions 
// What is the difference between a parameter and an argument?
 
// The parameter is the placeholder we are passing through to the function. 

// The argument is the actual values passed to the function once the function is called.

// Within a function, what is the difference between return and console.log?

// console.log() is a method used on the console object that is used to print to the console. Console.log will run in a function, but it will not stop code block when ran nor will a function with simple console.log() return or 'hold' a value.

// Return is a statment which does end the function's code block from running, and does produce a value to be returned on the functions call.

//1 Palindrome 

const checkPalindrome = (str) => {
    const reverseString = str.toLowerCase().split("").reverse().join("");
    
    return str.toLowerCase() === reverseString;
};


console.log( checkPalindrome("Radar"));

// 2Digit Sum

const sumDigits = (num) => {
    num = num.toString();
    return parseInt(num[1]) + parseInt(num[0]);
}

console.log(sumDigits(12) );

// 3 Pythagoras 


const calculateSide = (sideA,sideB) => {
    return Math.sqrt((sideA ** 2) + (sideB ** 2))
   
}

console.log( calculateSide(25,30) );

// Sum Array

const sumArray = (arr) => {
    let sum = 0;
    for(let i = 0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// let p = [1, 2, 3, 4, 5, 6].reduce(function(acc,curV){
//     return acc +curV;
// });

console.log(sumArray([1, 2, 3, 4, 5, 6]))

// Prime Numbers
const checkPrime = (num) => {
    if(num === 1) {
        return false;
    }
    for(i=1; i<= Math.sqrt(num);i++){
        if(Number.isInteger(num/i) && i !== num && i !== 1) { return false}
    }
    return true;
}

console.log( checkPrime(47) );

// Insert Dash

// THIS WAS A RABBIT HOLE but it works in the end  : (
const insertDash = (num) => {
   num = num.toString();
   
   for(let i=0; i<2;i++){
    num = num.replace(/([13579])([13579]){1}/gm, '$1-$2')
   }
   return num;
} 

insertDash(45479333333);

