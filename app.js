let name = "Wayne Carl";
const numberStates = 50;
let nine = 5 + 4;

function sayHello(){
    console.log("Hello World");
}

console.log(sayHello);

function checkAge(name, age){
    if(name >= 21){
        console.log("over21")
    }else{
        console.log("sorry " + name + "you are not 21 or older");
    }
}

let charles = checkAge("charles", 21);
let abby = checkAge("Abby", 27);
let james = checkAge("James", 18);
let john = checkAge("John", 17);

console.log(charles + abby + james + john);

favoriteVegies = ["spinach", "broccoli", "sweetpotatoe"];

let i = 0;
while(i < 2){
    console.log(favoriteVegies[i]);
    i++;
}

pet = {name: "titan", breed: "ridge back"};
console.log(pet.name + " " + pet.breed);

person1 = {name: "p1", age: 1};
person2 = {name: "p2", age: 2};
person3 = {name: "p3", age: 3};
person4 = {name: "p4", age: 4};
person5 = {name: "p5", age: 5};
