function lsearch(arr,t){
    for(i=0;i<arr.length;i++){
        if(arr[i]==t){
            return i
        }
    }
    return -1
}
console.log(lsearch([1,2,3,4,5],3));