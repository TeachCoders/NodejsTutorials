function sum(num1, num2){
 return num1+num2
}

function sub(num1, num2){
    return num1-num2
}

function mult(num1, num2){
    return num1*num2
}


function calc(a, b,c){
    return a(b, c)
}

let result = calc(mult, 10, 20);
console.log(result)