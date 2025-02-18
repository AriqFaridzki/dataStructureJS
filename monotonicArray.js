// An array is monotonic if it is either monotone increasing or monotone decreasing. An array is monotone increasing if all its elements from left to right are non-decreasing. An array is monotone decreasing if all  its elements from left to right are non-increasing. Given an integer array return true if the given array is monotonic, or false otherwise. 


const checkMonotonic = function (array){

// Monotonic Increase as Default
let checkType = array[0] < array[1] // O(1)
    
    if (checkType) {
        
        for(let i=0; i < array.length ;i++){ // O(n)
        // trying to get false, it can't be higher than array[i]
            if(array[i] > array[i+1]){
                return false
            }
        }
        
        return true
        
// monotonic Decrease
     } else { 
     // vise versa
        for(let i=0; i < array.length ;i++){
            if(array[i] < array[i+1]){
                return false
            }
        }
        
        return true
     }
     
    if(array.length == 0){
        return true
    }

}

// Worst Case : O(n)
// Best Case : O(1)

console.log(checkMonotonic([3,3,3,3,1]))