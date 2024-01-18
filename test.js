
var uniqueOccurrences = function(arr) {
  let newArr = []
  let count
  for(let i = 0;i<arr.length-1;i++){
      count = 0
      for(let j =i+1;j<arr.length;i++){
            if(arr[i] === arr[j]){
                count++
                newArr.push(count)
                arr[i] = -1
            }
      }
  }
  console.log(newArr)
};


let ar1r = [1,2,2,1,1,3]
uniqueOccurrences(ar1r)   