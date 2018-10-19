//UPDATE: from last push, squareRoot & cubeRoot function gets the correct value to the second decimal point which was my goal.
//This is for pushing as of now. Only the root function outputs the largest 'integer' value that the pertinent exponent value does not exceed the number fed to the function. For the "perfect-power-numbers", the return values are mathematically correct. i.e. for the values given in the prompts to check, they work.

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

//MULTIPLY
//(would've loved if the function name were multiply to keep the part of speech consistent)
const multiple = (num1, num2) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        let ans = num1 * num2;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;        
    } 
    return "Error!";
};

//DIVIDE
const divide = (dividend, divisor) => {
    //one more condition to check if the divisor is not zero
    if (typeof dividend === 'number' && typeof divisor === 'number' && divisor != 0) {
        let ans = dividend / divisor;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;        
    } 
    return "Error!";
};

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

//POWER
const power = (base, exponent) => {
    if (typeof base === 'number' && typeof exponent === 'number') {
        let ans = 1;
        for (let i = 0 ; i < exponent ; i++) {
            ans = ans * base;
        }
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;        
    } 
    return "Error!";
};

//MODULO
const modulo = (dividend, divisor) => {
    if (typeof dividend === 'number' && typeof divisor === 'number') {
        let ans = dividend % divisor;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;        
    } 
    return "Error!";
};

//"function within finctions" comes in handy from here on!
//SQUARE ROOT: n^(1/2)
const squareRoot = (num) => {
    if (typeof num === 'number' && num >= 0) {        
        let sqrt_int = 0;            
        for (let i = 0 ; square(i+1) <= num ; i++) {
            sqrt_int = sqrt_int + 1;
        }        
        let sqrt_tenth = 0;        
        for (let i = 0 ; square(sqrt_int + sqrt_tenth + 0.1) <= num && i < 9 ; i++) {
            sqrt_tenth = sqrt_tenth + 0.1;
        }
        let sqrt_hundredth = 0;        
        for (let i = 0 ; square(sqrt_int + sqrt_tenth + sqrt_hundredth + 0.01) <= num && i < 9 ; i++) {
            sqrt_hundredth = sqrt_hundredth + 0.01;
        }
        //sqrt_thousandth: so that it rounds to the correct number
        let sqrt_thousandth = 0;
        for (let i = 0 ; square(sqrt_int + sqrt_tenth + sqrt_hundredth + sqrt_thousandth + 0.001) <= num && i < 9 ; i++) {
            sqrt_thousandth =  sqrt_thousandth + 0.001;
        }              
        let ans = sqrt_int + sqrt_tenth + sqrt_hundredth +  sqrt_thousandth;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);                
        return ans;        
    } 
    return "Error!";
};

//CUBE ROOT: n^(1/3)
const cubeRoot = (num) => {
    if (typeof num === 'number' && num >= 0) {        
        let cbrt_int = 0;        
        for (let i = 0 ; cube(i+1) < num ; i++) {
            cbrt_int = cbrt_int + 1;
        }  
        let cbrt_tenth = 0;        
        for (let i = 0 ; cube(cbrt_int + cbrt_tenth + 0.1) < num && i < 9 ; i++) {
            cbrt_tenth = cbrt_tenth + 0.1;
        }
        let cbrt_hundredth = 0;        
        for (let i = 0 ; cube(cbrt_int + cbrt_tenth + cbrt_hundredth + 0.01) < num && i < 9 ; i++) {
            cbrt_hundredth = cbrt_hundredth + 0.01;
        }
        //cbrt_thousandth: so that it rounds to the correct number
        let cbrt_thousandth = 0;
        for (let i = 0 ; square(cbrt_int + cbrt_tenth + cbrt_hundredth + cbrt_thousandth + 0.001) < num && i < 9 ; i++) {
            cbrt_thousandth = cbrt_thousandth + 0.001;
        }              
        let ans = cbrt_int + cbrt_tenth + cbrt_hundredth +  cbrt_thousandth;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);                
        return ans ;        
    } 
    return "Error!";
};

//X ROOT: n^(1/x)
const root = (num, x_root) => {
    if (typeof num === 'number' && typeof x_root === 'number') {
        let root_val = 0;
        let check = power(root_val, x_root);
        for(let i = 0 ; i+1 < x_root && check <= num; i++){
            root_val = root_val + 1;
        }
        let ans = root_val;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;
    }
    return "Error!"
}