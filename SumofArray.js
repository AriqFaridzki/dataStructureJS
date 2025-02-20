function arraySum(array) {

    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum = array[index] + sum    
    }

    return sum

}

console.log(arraySum([1,2,3,4,5,6]));

