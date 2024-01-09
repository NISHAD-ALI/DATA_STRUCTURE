let ar = [1,3,43,5,22]
console.log(insertion(ar));

function insertion(arr){
   for(let i=0;i<arr.length;i++){
      let nti = arr[i]
      let j = i-1
      while(j>=0 && arr[j] >nti){
         arr[j+1] = arr[j]
         j = j-1
      }
      arr[j+1] = nti
   }
   return arr
}