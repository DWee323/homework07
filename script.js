//The final file should just the functions, no console.log calls or function calls.

//The following tasks do not need to be done in order. I will review the final file.

//For all functions, be sure to return a string "Error" 
//if any of the parameters 
//are missing, 
//are not numbers, 
//or have other mathmatical errors.

//Take time and be efficient with your code.

//If you don't remember some of this math, use google to refresh your mind.

// for FUNCTIONS: INCLUDE {} AND 'returns' even in ARROW FUNCTIONS


/*
//ADD SIMPLE
const addSim = (num1, num2) => {
    return num1 + num2;
};
console.log(addSim(7, 22));
*/

//ADD
const add = (num1, num2) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        let ans = num1 + num2;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;        
    } 
    return "Error!";
};

console.log(add(7, 22),
add(1, 2),  // returns 3
add(0.1, 0.2),  // returns 0.3
add(999, 1019),  // returns 2018
add(),  // return "Error"
add("Hello"),  // return "Error");
);


/*
//SUBRTRACT SIMPLE
const subtractSim = (num1, num2) => {
    return num1 - num2;
};
*/

//SUBRTRACT
const subtract = (num1, num2) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        let ans = num1 - num2;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;        
    } 
    return "Error!";
};

console.log(subtract(7, 22),
subtract(2, 1),  // returns 1
subtract(1, 2),  // returns -1
subtract(0.3, 0.2),  // returns 0.1
subtract(),  // return "Error"
subtract("Hello"),  // return "Error"
);


/*
//MULTIPLY SIMPLE
const multiplySim = (num1, num2) => {
    return num1 * num2;
}; 
*/

//MULTIPLY
// (would've loved if the function name were multiply to keep the part of speech consistent)
const multiple = (num1, num2) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        let ans = num1 * num2;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;        
    } 
    return "Error!";
};

console.log(multiple(7, 22),
multiple(2, 1),  // returns 1 > NOPE: 2
multiple(1, 2),  // returns -1 > NOPE: 2
multiple(0.1, 0.2),  // returns 0.02
multiple(),  // return "Error"
multiple("Hello"),  // return "Error"
);


/*
//DIVIDE SIMPLE
const divideSim = (num1, num2) => {
    return num1 / num2;
};
*/

//DIVIDE
const divide = (num1, num2) => {
    if (typeof num1 === 'number' && typeof num2 === 'number' && num2 != 0) {
        let ans = num1 / num2;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;        
    } 
    return "Error!";
};

console.log(divide(7, 22),
divide(2, 1),  // returns 2
divide(1, 2),  // returns 0.5
divide(1, 3),  // returns 0.33
divide(0, 10),  // returns 0
 
//Darn it, this gives me Infinity > should I give another condition "&& num2 != 0"?: I am unsure if mathematically /0 is undefined or infinity or unable...
divide(10, 0),  // returns "Error"
);


/*
//SQUARE SIMPLE
const square = (num) => {
    return num * num ;
};
*/

//SQUARE
const square = (num) => {
    if (typeof num === 'number') {
        let ans = num * num;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;        
    } 
    return "Error!";
};

console.log(square(7),
square(2),  // returns 4 (which is 2^2)
square(1),  // returns 1 (which is 1^2)
square(10),  // returns 100 (which is 100^2)
square("Hello"), 
);


/*
//CUBE SIMPLE
const cube = (num) => {
    let answer = 1;
    for (let i=0; i<3; i++) {
        answer = answer * num;
    }
    return answer;
};
*/

//CUBE
const cube = (num) => {
    if (typeof num === 'number') {
        let ans = 1;
        for (let i=0; i<3; i++) {
        ans = ans * num;
        }
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;        
    } 
    return "Error!";
};

console.log(cube(7),
cube(2),  // returns 8 (which is 2^3)
cube(1),  // returns 1 (which is 1^3)
cube(10),  // returns 1000000 (which is 100^3) > NOPE: 10^3 = 1000, cube(100) = 100^3 = 1000000
square("Hello"), 
);




//POWER SIMPLE
const power = (base, exponent) => {
    let answer = 1;
    for (let i = 0 ; i < exponent ; i++) {
        answer = answer * base;
    }
    return answer;
};



//MODULO 
/*
const modulo = (dividend, divisor) => {
    return dividend % divisor;
}
*/

//SQUARE ROOT: n^(1/2)
//power function, other functions within functions
/*여기서부터 헷갈리고 있어
const square_root = (num) => {
    return num * num ;
};

const power = (base, exponent) => {
    let answer = 1;
    for (let i = 0 ; i < exponent ; i++) {
        answer = answer * base;
    }
    return answer;
};
*/

//CUBE ROOT: n^(1/3)

//X ROOT: n^(1/x)

/*console.log( add(7, 22) );
        subtract(7, 22),
    multiply(3, 8),
    divide(69, 2),
    power(2, 5),
    square(4),
    cube(3),
    modulo(36, 11))
    */
    //square_root(),
    //cube_root(),
    //x_root(, ),