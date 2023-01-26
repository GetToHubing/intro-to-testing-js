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

console.log(isFive(5))