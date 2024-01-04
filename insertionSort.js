function insertion(arr){
    for(let i = 0 ; i < arr.length; i++){
        let nit = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] > nit ){
            arr[j+1] = arr[j]
            j=j-1
        }
        arr[j+1]=nit
    }
    return arr
}

let arr1 = [7,6,5,43,3]
console.log(insertion(arr1))