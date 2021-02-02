//ans-2
let array = [34, 7, 23, 32, 5, 62]
mergeSort(array, 0, array.length - 1)
console.log(array)

// main function that sorts array[start..end] using merge()
function mergeSort(array, start, end) {
    // base case
    if (start < end) {
        // find the middle point
        let middle = Math.floor((start + end) / 2)

        mergeSort(array, start, middle) // sort first half
        mergeSort(array, middle + 1, end) // sort second half

        // merge the sorted halves
        merge(array, start, middle, end)
    }
}

// merges two subarrays of array[]
function merge(array, start, middle, end) {
    // create temp arrays
    let leftArrayLength = middle - start + 1
    let rightArrayLength = end - middle

    let leftArray = []
    let rightArray = []

    // fill in left array
    for (let i = 0; i < leftArrayLength; ++i)
        leftArray[i] = array[start + i]

    // fill in right array
    for (let i = 0; i < rightArrayLength; ++i)
        rightArray[i] = array[middle + 1 + i]

    // merge the temp arrays

    // initial indexes of first and second subarrays
    let leftIndex = 0,
        rightIndex = 0

    // the index we will start at when adding the subarrays back into the main array
    let currentIndex = start;

    // compare each index of the subarrays adding the lowest value to the currentIndex
    while (leftIndex < leftArrayLength && rightIndex < rightArrayLength) {
        if (leftArray[leftIndex] <= rightArray[rightIndex])
            array[currentIndex] = leftArray[leftIndex++]
        else
            array[currentIndex] = rightArray[rightIndex++]
        currentIndex++
    }

    // copy remaining elements of leftArray[] if any
    while (leftIndex < leftArrayLength) array[currentIndex++] = leftArray[leftIndex++]

    // copy remaining elements of rightArray[] if any
    while (rightIndex < rightArrayLength) array[currentIndex++] = rightArray[rightIndex++]
}

//ans 3
var a = 2154; //First number
var b = 458; //Second number 
var gcd;
while (a != b) {
    if (a > b) {
        a = a - b;
    } else {
        b = b - a;
    }
}
gcd = a;
console.log(gcd);

//ans 4
var last = function(array, n) {
    if (array == null)
        return void 0;
    if (n == null)
        return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
};

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));

//ans-5
function removeDuplicates(num) {
    var x,
        len = num.length,
        out = [],
        obj = {};

    for (x = 0; x < len; x++) {
        obj[num[x]] = 0;
    }
    for (x in obj) {
        out.push(x);
    }
    return out;
}
var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
result = removeDuplicates(Mynum);
console.log(Mynum);
console.log(result);