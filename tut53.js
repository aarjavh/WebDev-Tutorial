console.log("THis is tutorial 53");

function greet(name, greetText = "Greetings"){
    console.log(greetText +"!" + name + " is a good boy");
}

function sum(a, b, c){
    let d = a + b + c;
    return d;
}

let name1 = "Aarjav";
let name2 = "Bhavya";
let name3 = "Mann";
let greetText = "Good Morning";
greet(name1, greetText);
greet(name1);
greet(name2, greetText);
greet(name3, greetText);
let returnVal = sum(1, 2, 3);
console.log(returnVal);
