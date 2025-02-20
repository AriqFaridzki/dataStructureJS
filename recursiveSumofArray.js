

/*
 * the algorithm will sum the element in the array 
 *
 * The function expected to return INTEGER_ARRAY
 * The function accept INTEGER_ARRAY as paramater
 */

function sumArr(arr, counter){

    if(counter == arr.length){
        return 0
    }
    // console.log(counter)
    // console.log(arr.length)

    return arr[counter] + sumArr(arr, counter + 1);
    // the array will return a value *later* ,while 
    // array[counter] get accessed right away
}

// Time  : o(n)
// Space : o(n)



console.log(sumArr([1,2,3,4,5], 0 ));