function refact(n){
    if(n==0){
        return 1
    }
    return n*refact(n-1)
}
console.log(refact(1));
console.log(refact(2));
console.log(refact(21));