function quick(arr){
    if(arr.length<2){
        return arr
    }
    let pivot = arr[arr.length-1]
    let left =[]
    let right = []
    for(i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quick(left),pivot,...quick(right)]                                                              
}

let v = [1,5,8,4,3]
console.log(quick(v));


let k = v.slice(2)
console.log(k);   