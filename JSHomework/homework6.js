// #1. Check if given array consists only from unique elements or not.
function areElementsUnique(arr) {
    let uniqueArray = [];
    for (let el of arr) {
        if(uniqueArray.includes(el)) {
            return false;
        }
        uniqueArray.push(el);
    }
    return true;    
}


// #2. Find the sum of numbers which square roots are even numbers.
function partialSum(arr) {
    return arr.filter(el => !(el % 2) && !(Math.sqrt(el) % 2))
    .reduce((sum, el) => sum += el,0);
}


// #3. Check whether string is palindrome, or not.
function isPalindrome(str){
    let withoutPunctuation = str.replace(/[\W_]/g, "").replace(" ", "");
    let i = 0;
    while(i < withoutPunctuation.length / 2) {
        if(withoutPunctuation.charAt(i).toLowerCase() !== withoutPunctuation.charAt(withoutPunctuation.length - i - 1).toLowerCase()) {
            return false;
        }
        i++;
    }
    return true;
}


// #4. Select the correct sublist of anagrams of given word.
function anagrams(str, arr) {
    str = str.split('').sort().join('');
    return arr.filter( el => str === el.split('').sort().join(''));
}

