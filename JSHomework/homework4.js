// #1. Remove the first element of array and return the given array using recursive function.
function removeFirst(array, length = array.length) {
    if(array.length <= 1) {
        array.length  = 0
        return array;
    }
    if(length === 2) {
        return array = array.slice(1, 2);        
    }
    return removeFirst(array,length - 1).concat(array[length - 1]);
}


// #2. Invert keys to values of given object.
function invertKeysToValues(obj) {
    let result = {};
    let entries = Object.entries(obj);
    for(let i = 0; i < entries.length; i++) {
       let value = entries[i][1];
        if(result.hasOwnProperty(value.toString())){
            if(Array.isArray(result[value])){             
               result[value].push(entries[i][0]);
            } else {
               let keys = [result[value]];
               keys.push(entries[i][0]);
               result[value] = keys;
            }   
       } else{
            result[value] = entries[i][0];
        }        
    }
    return result;
}


// #3. Sort the books from given list by the percent in descending order which readStatus is true.
function sortTheList(list) {
    return list.filter(element => element.readStatus).sort((a,b) => b.percent - a.percent);
}


// #4. Rotate an array n places to the left recursively.
function rotateArray(arr, n) {
    if(n === arr.length || n === 0){
        return arr;
    }
    arr.unshift(arr.pop());
    n++;
    return rotateArray(arr,n);
}

// #5. Had not been done yet


// #6. Had not been done yet
