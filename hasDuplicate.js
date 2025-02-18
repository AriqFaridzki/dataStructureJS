// Eruditio's superiority over technology. 

 /**
     * @param {number[]} nums
     * @return {boolean}
     */
function hasDuplicate(array) {
    for (let index = 0; index < array.length; index++) {
        
        if(array[index] == array[index+1]) {
            return true;
        }
        
    }

    return false;
}

console.log(hasDuplicate([1, 2, 3, 4]));