function bubbleSort(arr){
    let count
    do{
        count = 0
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                count = 1
            }
            
        }
    }while(count)
    return arr 
}

let ar = [1,3,2,6,3]
console.log(bubbleSort(ar));
