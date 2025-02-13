// 2 Pointer Method, good for comparing and sorting.

function sortedSquarredArray(input){
    let newArray = new Array(input.length).fill(0);
    
    // Pointer Location Index Initial
    let leftPointer = 0;
    let rightPointer = input.length - 1;
    
    // it has to be decrement, to put the biggest value to atmost right. (Ascending) and vise versa
    
    for(let i=0;  i < input.length - 1  ;i++){
        // Access array and then convert to squared value
        let leftSquared = Math.pow(input[leftPointer], 2);
        let rightSquared = Math.pow(input[rightPointer], 2);
        
        
        // the newArray will be filled with higher value, atmost right first. 
        
        // if true then move the "leftPointer" to +1 index
        if(leftSquared > rightSquared){
            newArray[i] = leftSquared;
            leftPointer++
        }
        
        // if true then move the "rightPointer" to -1 index
        if(leftSquared < rightSquared){
            newArray[i] = rightSquared;
            rightPointer--
        }
        
    }
    
    return newArray
}

console.log(sortedSquarredArray([-3,-2,0,1,9,8]))
