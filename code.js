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

console.log(isEven('banana'))