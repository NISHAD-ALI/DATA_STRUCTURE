let a = [1,1,3,4,5,2,3]
let b = [...new Set(a)]
let newSet = new Set()
for(let i=0;i<a.length;i++){
   newSet.add(a[i])
}
console.log(newSet.has(1));
console.log(b);
const c = a.splice(0,2)
console.log(a);