function arraySum(array){
    if(array.length == 0){
        return array[0];
    }

    
    console.log(array);
    return arraySum(array[array.length - 1])
}


console.log(arraySum([1,2,3]));