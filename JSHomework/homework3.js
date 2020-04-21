// #1. Check if all digits of the number are odd or not.
function areDigitsOdd(num) {
    if(num % 10 % 2 === 0){
        return false;
    }
    num = Math.floor(num / 10); 
    if(Math.floor(num / 10)) {
        return areDigitsOdd(num); 
    } else return num % 2 === 1 ? true : false;
}


// #2. Find minimal positive element of given array.If such element does not exist, return -1․
function minPositive(array, min = Number.MAX_VALUE, queue = 0) {
    if(queue ===  array.length){
        if(min === Number.MAX_VALUE){
            return -1;
        }
        return min;
    }
    if(array[queue] < 0 || array[queue] > min){
        queue++;
        return minPositive(array, min, queue);
    }
    min = array[queue];
    queue++;
    return minPositive(array, min, queue);
}


// #3. Print the fibonacci sequence as array.
function fibRecursion(n, elements = [1, 1]) {
    if(n === 0) {
        return [];
    }
    if(n === 1) {
        return [1];
    }
    if(n === 2) {
        return [1, 1];
    }
    elements = fibRecursion(n - 1, elements);
    elements.push(elements[elements.length - 2] + elements[elements.length - 1]);
    return elements;
}


// #4. Flattens given array of nested arrays.
function toFlattenNestedArrays(array) {
    let result = [];
    for(let current of array){        
        if(Array.isArray(current)){
            result = result.concat(toFlattenNestedArrays(current));
        } else {
            result.push(current);
        }
    }
    return result;
}


// #5. Calculate the sum of digits of given number.
function sumOfDigits(num){
    if(!Math.floor(num / 10)){
        return num;
    }
    let sum = 0;
    while(num){
        sum += num % 10;
        num = Math.floor(num / 10)
    }
    num = sum;
    return sumOfDigits(num);
}
