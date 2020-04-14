// #1. Check if the number is prime or not.
function isPrime(number){
    let isPrime = (number === 1) ? 'no' : 'yes';
    for(let i = 2; i <= Math.floor(number / 2); i++){
        if(number % i === 0) {
            isPrime = 'no';
        }
    }
    return isPrime;
}


// #2. Calculate nth Fibonacci number.
function fib(n) {
    if(n <= 1){
        return n;
    }
    return fib(n - 2) + fib(n - 1);
}


// #3. Print Fibonacci series up to n.
function fibSequence(n){
    let result = '';
    let i = 0;
    while(fib(i) <= n) {
        result += (fib(i + 1) <= n) ? fib(i) + ', ' : fib(i);
        i++;
    }
     return result;
}


/*
    #4. Calculate product and sum of the digits of the number.
If product is divisible by the sum, print the quotient, otherwise print the remainder.
*/
function checkDivisibility(number) {
    number = (number > 0) ? number : -number ;
    if(number === 0) {
        return 'Cannot calculate.'
    }
    let sum = 0;
    let product = 1;
    while(number !== 0){
        sum += number % 10;
        product *= number % 10;
        number = Math.floor(number / 10);
    }
    
    return (product % sum === 0) ? `Quotient is ${product / sum}.` : `Reminder is ${product % sum}.`
}


// #5. Create an array of evenly spaced numbers by the given length over the specified interval.
function evenlySpacedArray(a, b, num) {
    let result = [];
    if(num === 1) {
        result.push(a);
        return result;
    }
    let delta = (b - a) / (num - 1);
    let i = 0;
    while(i < num) {
        result.push(a + i * delta);
        i++;
    }
    return result;
}


// #6. Find the index of the second maximum element.
function compare(a, b) {
    if(a > b) return 1;
    if(a === b) return 0;
    if(a < b) return -1;
}

function indexOfSecondMax(arr) {
    let arrClone = [];
    arrClone = Array.from(arr);
    arrClone.sort(compare);
    return arr.indexOf(arrClone[arrClone.length - 2]);
}


/*
    #7. Pad the array in the following way: the padding amount specifies 
how many elements should be taken from the array edges, 
the repeat amount specifies how many times the pad should be repeated.
*/
function arrayPadding(array, padAmount, repeat) {
    if(padAmount > array.length){
        return 'Invalid padding amount';
    }
    let front = array.slice(0, padAmount);
        let end = array.slice(array.length - padAmount, array.length);
    while(repeat !== 0) {
        array = front.concat(array);
        array = array.concat(end);
        repeat--;
    }


    return array;
}
