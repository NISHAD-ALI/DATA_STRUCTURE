function SelectSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let min = i
        for(j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }
        if(min != i){
            let temp = arr[i] 
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}

const c = [1,3,43,5,22]
console.log(SelectSort(c));