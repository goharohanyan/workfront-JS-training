// #1. Implement the indxeOf() method of array.
function indexOfImpl(arr, elem, start = 0, end = arr.length - 1) {
    if(start === end){
        if(arr[start] === elem) {
            return start;
        }
        return -1;        
    }
    let k = start + Math.floor((end - start) / 2);
    if(elem === arr[k]) {
        return k;
    } else if(elem < arr[k]) {
        return indexOfImpl(arr, elem, start, k - 1);
    } else {
        return indexOfImpl(arr, elem, k + 1, end);
    }
}


// #2. Build tree from given nodes.
function treeNodes(arr) {
    let result = {};
    let root = arr.find(el => el.id === 'root');
    result[root.id]= {};
    for(let el of root.children){
        result[root.id][el] = {};
    }
    arr.splice(arr.indexOf(root), 1)
    let i = 0;
    while(arr.length) {
        let current = arr[i];
        if(setNewProp(result, current.id, current.children)) {
            arr.splice(i, 1);
        } else {
            i++;
        }
    }
    
    return result;
}

function setNewProp(obj, id, arr ){
    let isSetted = false;
    for(const key in  obj) {
        if( key == id){
            isSetted = true;
            for(let el of arr){
                obj[key][el] = {};
            }
            return obj[key];
        }
        if(typeof obj[key] === 'object' && Object.entries(obj).length){
            if(setNewProp(obj[key], id, arr)) return true;
        }
    }
    return isSetted;
}
