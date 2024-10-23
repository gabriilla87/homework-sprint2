function findEvenIndex(arr) {
    const sumOfSlice = (start, end) => {
        return arr.slice(start, end).reduce((acc, el) => acc + el, 0)
    }
    for (let i = 0; i < arr.length; i++) {
        if (sumOfSlice(0, i) === sumOfSlice(i + 1, arr.length)) {
            return i
        }
    }
    return -1
}

console.log(findEvenIndex([10,-80,10,10,15,35,20]))