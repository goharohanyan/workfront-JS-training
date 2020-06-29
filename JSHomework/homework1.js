// Given a number. Print “odd” if the number is odd and “even” if it’s even.
function oddOrEven(number){
    if(number % 2 === 1){
        console.log('odd');
    } else {
        console.log('even')
    }
}
// test


/*
 Given two numbers print 1 if one of them is divisible by the other one,
  otherwise print 0.
  */
function divisible(number1, number2) {
    if(number1 % number2 === 0 || number2 % number1 === 0){
        console.log(1)
    } else {
        console.log(0)
    }
}


// Given two angles of a triangle. Find the third one.
function thirdAngle(firstAngle,secondAngle){
    console.log(180 - (firstAngle + secondAngle))
}


// For given positive integer n print the sum n + nn + nnn
function sum(number){
    function multiplier(number){
        let multiplier = 1;
        while(number !== 0){
            multiplier *= 10;
            number = Math.floor(number / 10);
        }
        return multiplier;
    }
    let initialNumber = number;
    let prod = multiplier(number);
    let result = number;
    for( i = 0; i < 2; i++){
        number = number * prod + initialNumber;
        result += number;
    }
    console.log(result);
}


/* 
Bring the last digit of given positive number to the beginning.
If the last digit is 0, number remains the same.
*/
function lastDigitInFront(number){
    if( !(number % 10) || !(Math.floor(number / 10)) ){
        console.log(number);
    } else {
    let str = String(number);
    let result = number % 10;
    for (let i = 0; i < str.length - 1; i++) {
        result = result * 10 + Number(str.charAt(i));
        
    }
    console.log(result);
}
} 


// Print the average of given five numbers
function average(num1, num2, num3, num4, num5){
    console.log((num1 + num2 + num3 + num4 + num5) / 5);
}


// Check if a number is a multiple of 3, 5 or 7.
function dividedByThreeFiveOrSeven(num){
    let message = '';
    if(num % 3 === 0 && num % 5 === 0 && num % 7 === 0){
        message = `${num} is a multiple of 3, 5 and 7.`;
    } else if(num % 3 === 0 && num % 5 === 0){
        message = `${num} is a multiple of 3 and 5.`;
    } else if(num % 3 === 0 && num % 7 === 0){
        message = `${num} is a multiple of 3 and 7.`;
    } else if(num % 5 === 0 && num % 7 === 0){
        message = `${num} is a multiple of 5 and 7.`;
    } else if(num % 3 === 0){
        message = `${num} is a multiple of 3.`;
    } else if(num % 5 === 0){
        message = `${num} is a multiple of 5.`;
    } else if(num % 7 === 0){
        message = `${num} is a multiple of 7.`;
    } else {
        message = `${num} is not a multiple of 3, 5 or 7.`
    }
    console.log(message);
}


// Check person's age by input information
function defineAnAge(age, period){
    let category = '';
    if(period === 'months' && age >=1 && age <= 12){
        category = 'baby';
    } else if(period === 'years'){
        if(age >= 1 && age <= 2){
            category = 'toddler';
        } else if(age >= 3 && age <= 12){
            category = 'child';
        } else if(age >= 13 && age <= 17){
            category = 'teenager';
        } else if(age >= 18 ){
            category = 'adult';
        }
    }
    console.log(category);
}


// Sort given three numbers by the ascending order.
function sortInAscendingOrder (num1,num2,num3) {
    function swap(num1,num2){
        num1 ^= num2;
        num2 ^= num1;
        num1 ^= num2;
        console.log(num1, num2)
    }

   if(num1 > num2){
       swap(num1, num2);
   }
   if(num2 > num3){
       swap(num2, num3);
   }
   if(num1 > num3){
       swap(num1, num3);
   }
   Console.log(num1, num2, num3)  
}


// Check if student pass or fail examination.
function passOrFail(mark1, mark2, mark3){
    let average = (mark1 + mark2 + mark3) / 3;
    let resultMessage = 'Not passed';
    if(mark1 >= 40 && mark2 >= 40 && mark3 >= 40){
        resultMessage = 'Passed';
    } else if(average >= 50) {
        let isPassed = (mark1 < 40 && mark2 >= 40 && mark3 >= 40)
                       || (mark1 >= 40 && mark2 < 40 && mark3 >= 40)
                        || (mark1 >= 40 && mark2 >= 40 && mark3 < 40);
        if(isPassed){
            resultMessage = 'Passed';
        }     
    }
    console.log(resultMessage);     
}


// Find the sign of product of three numbers without multiplication operator.
function checkSignOfProduct (num1, num2, num3) {
    if(!num1 || !num2 || !num3){
        return 'Unsigned';
    }
    let negatives = 0;
    if(num1 < 0){
        negatives++;
    }
    if(num2 < 0){
        negatives++;
    }
    if(num3 < 0){
        negatives++;
    }
    if(negatives % 2 === 0){
        console.log('+');
    } else{
        console.log('-');
    }
}


// Solve quadratic equation with given coefficients.
function squareEquationSolver(a,b,c){
    let resultMessage = '';
    let root1 = 0;
    let root2 = 0;
    if(a < 0){
        resultMessage = 'Enter valid constans';
    } else {
        let discriminant = Math.pow(b,2) - 4 * a * c;
        if(discriminant < 0){
            resultMessage = 'Solution does not exists';
        } else if(discriminant === 0){
            root1 = root2 = -b / (2 * a);
            resultMessage = 'Solution is -1'; 
        } else if(discriminant > 0){
            root1 = (-b - Math.sqrt(discriminant)) / (2 * a);
            root2 = (-b + Math.sqrt(discriminant)) / (2 * a);
            resultMessage = `Solutions are ${root1} and ${root2}`
        }
    }
    console.log(resultMessage);
}


// Rewrite this part of script using only 2 if operator.
var n = +prompt();
let i = 0;
let j = 0;

if(n % 2 === 0 && !(Math.floor(n / 10))){
    i += 1;
}

if(n % 3 === 0 && n % 10 === 1){
    j +=1;
}


// Check whether the digit contains in the number or not.
function checkDigit(num, digit){
    let isContained = false;
    while(num !== 0){
        if(num % 10 === digit){
            isContained = true;
            break;
        } else {
            num = Math.floor(num / 10);
        }
    }
    console.log(isContained ? 'Yes' : 'No');
}


// Reverse the first and last digits of number.
function swapFirstAndLast (number) {
    let strNumber = number > 0 ? String(number) : String(-number);
    if(strNumber.length > 1){
    let reversed = Number(strNumber.charAt(strNumber.length - 1));
    for(let i = 1; i < strNumber.length - 1; i++){
        reversed = reversed * 10 + Number(strNumber.charAt(i));
    }
    reversed = reversed * 10 + Number(strNumber.charAt(0));
    console.log(number > 0 ? reversed : -reversed);
    } else {
        console.log(number);
    }
} 


// Compute the area of the typed figure.
function computeArea (measure1, measure2) {
    if(measure1 <= 0 || measure2 <= 0){
        console.log('Please enter only positives')
    } else{
        let figureType = prompt("Type a figure and measurements", "");
        if(figureType === 'rectangle'){
            console.log(measure1 * measure2);
        }
        if(figureType === 'triangle'){
            console.log(measure1 * measure2 / 2);
        }
    }
}


// Find the difference between the biggest and the smallest digits of given number.
function minMaxDigitDifference(num){
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    while(num !== 0){
        min = Math.min(min, num % 10);
        max = Math.max(max, num % 10);
        num = Math.floor(num / 10);
    }
    return max- min;
}
