/*
Similar to Python implementation which I did first, except without same line
assignment, had to use a temporary variable instead.

Fibbonacci 1 and 2, representing total different ways to climb staircase,
temp is the placeholder
*/

function climbingStairs(totalSteps) {
    let fib1 = 1; 
    let fib2 = 1;
    let temp = 0; 

    for(let i=0; i<totalSteps-1; i++) {

    	temp = fib2;
    	fib2 = fib1 + fib2;
        fib1 = temp;
        
    }

    return(fib2);
}

// For testing/display purposes, I used an online editor:

// for(let i=0; i<10; i++){
//   console.log("i: " + i + " Total ways: " + climbingStairs(i));
// }
