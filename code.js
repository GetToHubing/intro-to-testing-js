// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(x) {
    if(typeof x === 'string') {
        return "Hello, " + x + "!";
    } else if (x === undefined || typeof x === 'boolean') {
        return "Hello, World!";
    } 
    // else if (typeof x === 'boolean') {
    //     return "Hello, World!";
    // } 
    else {
        return;
    }
}

//console.log(sayHello(true));

function isFive(x) {
    if(parseInt(x) === 5) {
        return true;
    } else {
        return false;
    }
    // if(x === 5) {
    //     return true;
    // } else if( x === "5") {
    //     return true;
    // } else {
    //     return false;
    // }
}

function isEven(x) {
    if(/\d/.test(x) && parseInt(x) % 2 == 0){ //if it is a number AND even
        return true;
    } 
    else { // everything else
        return false;
    }
    // if(typeof x === 'undefined') {
    //     return false;
    // } else if(x === 'boolean') {
    //     return false;
    // } else if(x === Infinity) {
    //     return false;
    // } else if(parseInt(x) % 2 == 0) {
    //     return true;
    // } else if(typeof x == 'string') {
    //     return false;
    // } else {
    //     return false;
    // }
}

console.log(isEven('8'))

function isVowel(x) {
    if(typeof x === 'undefined' || typeof x === 'boolean') {
        return false;
    } else if(/[^aeiou]|\d/gi.test(x)) { 
        return false;
    } else if(/[aeiou]/i.test(x)) {  
        return true;
    } else {
        return false;
    }
}

//console.log(isVowel(4))

function add(x, y) {
    if(typeof parseInt(x) === 'number' && typeof parseInt(y) === 'number') {
        return parseInt(x) + parseInt(y);
    } else {
        return NaN;
    }
}

//console.log(add("banana", "split"))