function bc(arr,t){
    let first = 0
    let last = arr.length-1

    while(first <= last){
        let mid = Math.floor((first + last)/2)
        if( t === arr[mid]){
            return mid
        }
        if(t < arr[mid]){
            last = mid - 1
        }else{
            first = mid + 1
        }
    }
    return - 1
}


console.log(bc([1,2,3,4],4));