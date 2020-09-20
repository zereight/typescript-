"use strict";
var person = {
    name: "nicolas",
    age: 22,
    gender: "male",
};
var sayHi = function (person) {
    return "Hello " + person.name + " " + person.age + " " + person.gender;
};
console.log(sayHi(person));
