function merge(arr) {
    if (arr.length < 2) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return sort(merge(left), merge(right))
}
function sort(leftArr, rightArr) {
    let sorted = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sorted.push(leftArr.shift())
        } else {
            sorted.push(rightArr.shift())
        }
    }
    return [...sorted, ...leftArr, ...rightArr]
}

const arr1 = [6, 4, 3, 8, 5, 3]
console.log(merge(arr1));