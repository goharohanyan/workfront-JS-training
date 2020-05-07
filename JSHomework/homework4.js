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

// #5. Create a function that builds a tree like object from given array. 
function checkProperty(obj,prop){
    debugger;
    let hasProperty = false;
    for(let key in obj){
        if(key === String(prop)) { 
            hasProperty = true;
            return hasProperty;
        } 
        if(typeof obj[key] === 'object' && Object.entries(obj[key]).length){
                hasProperty = checkProperty(obj[key],prop);               
                if(hasProperty) return hasProperty;
        }
    }
    return hasProperty;
}


function setProperty(obj, newParent, newId){
    debugger;
    let isSetted = false;
    for(let key in obj){
        if(key === String(newParent)){
            obj[key][newId] = {};
            isSetted = true
            return isSetted;
        }
        if(typeof obj[key] === 'object' && Object.entries(obj[key]).length){
            isSetted = setProperty(obj[key], newParent, newId);
            if(!isSetted) continue;
        }
    }
    return obj;
}


function tree(arr) {
    debugger;
    let tree = {};
    let first = arr.find( item => item.parent === null);
    let elements = Object.values(first);
    tree[elements[1]] = {};
    arr.splice(0,1);            
    for(let i = 0; i < arr.length; i++){
        let current = Object.values(arr[i])
        let parent = current[0];
        let id = current[1];
        if(checkProperty(tree,parent)){
            setProperty(tree, parent, id);
        } else {
            tree[id] = {}
        }    
    }
    return tree;
}


// #6. Had not been done yet


// #7. Create constructor function which instances implements method 'map'(like Array.map)
function CreateObjectWithMap(){
    this.map = function(fn){
        if(typeof fn !== 'function'){
            return;
        }
        let newObject = {};
        for(let key in this){
            if(typeof this[key] !== 'function'){
                newObject[key] = fn(this[key], key, this)
            }
        }
        return newObject;
    };
}

