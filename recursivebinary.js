function recursiveBinarySearch(arr, t){
    return search(arr,t,0,arr.length-1)
 }
 
 function search(arr,t,first,last){
     if(first > last){
         return -1
     }
     let mid = Math.floor((first+last)/2)
     if(t===arr[mid]){
         return mid
     }
     if(t<arr[mid]){
         return search(arr,t,first,mid-1)
     }else{
         return search(arr,t,mid+1,last)
     }
 }
console.log(recursiveBinarySearch([1,2,3,4,5],2)); 