/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY [alice,bob].
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 * 
 */

function compareTriplets(a, b) {

    let score = new Array(2).fill(0);

    for (let index = 0; index < a.length; index++) {
        if(a[index] > b[index]){
            score[0] += 1;
            console.log("alice win")
            
        }else if(a[index] < b[index]) {
            score[1] += 1;
            console.log("bob win")
        }
    }

    return score;
    
}

console.log(compareTriplets([5,6,7], [3,6,10]));
