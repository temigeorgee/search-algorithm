// linearSearch
function linearSearch(array, value){
    for(var i = 0; i < array.length; i++){
        if(value == array[i]){
            return i
        }
    }
    return -1
}
console.log(linearSearch([1,2,3,4],4));
console.log(linearSearch([1,2],1))
    // B
function linearSearchRecursive(array, value,i = 0){
    if(array.length == 0 )return -1;
    if(array.shift() == value)return i;
    return linearSearchRecursive(array, value, i+1)
}
console.log(linearSearchRecursive([1,2,3,4],4))

// BinarySearch
function binarySearch(array, value){
    var min = 0;
    var max = array.length -1;
    var mid = Math.floor((max + min)/2);
    while(array[mid] != value && min < max){
        if(value < array[mid]){
            max = mid -1;
        }
        else if(value > array[mid]){
            min = mid + 1;
        }
        mid =Math.floor((max + min)/2);
    }
    return (array[mid] != value) ? -1:mid;
}
console.log(binarySearch([1,2,3,4],4))
    // B
function binarySearchRecursive(arr,value,st,end=arr.length-1) {
    let sortArr = arr.sort((a,b)=>a-b);
    let start = st || 0;
    if(start <= end) {
        let midPoint = Math.floor((start+end)/2);
         if(value === sortArr[midPoint]) {
            return midPoint;
    }else if(sortArr[midPoint] > value) {
       return binarySearchRecursive(sortArr,value,start,midPoint-1);
    }else {
     return binarySearchRecursive(sortArr,value,midPoint+1,end);
    }
}
    return -1;
}

console.log(binarySearchRecursive([1,2,3,4],4))