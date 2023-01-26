// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(x) {
    if(typeof x === 'string') {
        return "Hello, " + x + "!";
    } else if (x === undefined) {
        return "Hello, World!";
    } else if (typeof x === 'boolean') {
        return "Hello, World!";
    } else {
        return "Hello, Jane!";
    }
}

//console.log(sayHello(true));

function isFive(x) {
    if(x === 5) {
        return 'true';
    } else if( x === "5") {
        return true;
    } else {
        return false;
    }
}

function isEven(x) {
    if(typeof x === 'undefined') {
        return false;
    } else if(x === 'boolean') {
        return false;
    } else if(x === Infinity) {
        return false;
    } else if(parseInt(x) % 2 == 0) {
        return true;
    } else if(typeof x == 'string') {
        return false;
    } else {
        return false;
    }
}

//console.log(isEven('false'))

function isVowel(x) {
    if(typeof x === 'undefined' || typeof x === 'boolean') {
        return false;
    }   
    // else if(isNaN(x) === false) {
    //     return false;
    // } 
    else if(/[^aeiou]|\d/gi.test(x)) { ///[^aeiou]/.test searches the string for anything that isn't a vowel
        return false;
    } else if(/[aeiou]/i.test(x)) { // 
        return true;
    } else {
        return false;
    }
}

console.log(isVowel(4))

function add(x, y) {
    if(typeof parseInt(x) === 'number' && typeof parseInt(y) === 'number') {
        let z = parseInt(x) + parseInt(y);
        return z;
    } else {
        return NaN;
    }
}

//console.log(add("banana", "split"))