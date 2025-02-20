


/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar) {
    // Write your code here

    let num = BigInt(0);
    
    for (let index = 0; index < ar.length; index++) {
        num += BigInt(ar[index]);
        
    }
    console.log(num);
    console.log(typeof num);
    return num;
}

const testCases = [
    [1, 2, 3, 4, 5],
    [1000000001, 1000000002, 1000000003, 1000000004, 1000000005],
    [9007199254740991, 9007199254740992, 9007199254740993],
    [123456789012345],
    [],
    [100, -50, 200, -150, 300],
    [-1000000001, -1000000002, -1000000003],
    [10000000000000000000000000000000, 0],
    [1000000000, 1000000000, 1000000000, 1000000000, 1000000000],
    [1,1,1,1,1]
];

for (let i = 0; i < testCases.length; i++) {
    const testCase = testCases[i];
    const result = aVeryBigSum(testCase);
    console.log(`Test Case ${i + 1}:`);
    console.log(`Input: ${testCase}`);
    console.log(`Result: ${result}`);
    console.log('---');
}