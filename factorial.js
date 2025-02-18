function factorialFor(num){

    if(num < 1){
        return 1;
    }
    
    return factorialFor(num - 1) * num
    // return num * factorialFor(num - 1);
}

console.log(factorialFor(5));