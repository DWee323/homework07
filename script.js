// for FUNCTIONS: INCLUDE {} AND 'returns' even in ARROW FUNCTIONS

//ADD
const add = (num1, num2) => {
    return num1 + num2;
};
console.log(add(7, 22));

//SUBRTRACT
const subtract = (num1, num2) => {
    return num1 - num2;
};

//MULTIPLY
const multiply = (num1, num2) => {
    return num1 * num2;
}; 

//DIVIDE 
const divide = (num1, num2) => {
    return num1 / num2;
};

//POWER
const power = (base, exponent) => {
    let answer = 1;
    for (let i = 0 ; i < exponent ; i++) {
        answer = answer * base;
    }
    return answer;
};

//SQUARE 
const square = (num) => {
    return num * num ;
};

//CUBE 
const cube = (num) => {
    let answer = 1;
    for (let i=0; i<3; i++) {
        answer = answer * num;
    }
    return answer;
};

//MODULO 
const modulo = (dividend, divisor) => {
    return dividend % divisor;
}

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

console.log(
    add(7, 22),
    subtract(7, 22),
    multiply(3, 8),
    divide(69, 2),
    power(2, 5),
    square(4),
    cube(3),
    modulo(36, 11),
    //square_root(),
    //cube_root(),
    //x_root(, ),
    );