
function heapifyDown(arr,heapSize,index){
    let largest = index
    let leftChild = 2*index+1
    let rightChild = 2*index+2
    if(leftChild < heapSize && arr[leftChild]>arr[largest]){
        largest = leftChild
    }
    if(rightChild < heapSize && arr[rightChild]>arr[largest]){
        largest = rightChild
    }
    if(index !== largest){
        [arr[index],arr[largest]] = [arr[largest],arr[index]]
        heapifyDown(arr,heapSize,largest)
    }
}

function heapSort(arr){
    let n = arr.length
    for(let i = Math.floor((n/2)-1);i>=0;i--){
        heapifyDown(arr,n,i)
    }
    for(let i = (n-1);i>0;i--){
        [arr[0],arr[i]]= [arr[i],arr[0]]
        heapifyDown(arr,i,0)
    }
    return arr
}
const a = [ 75433, 43, 22, 4, 6, 2 ]
console.log(heapSort(a));