//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true


let person3 = '{"pizza":["Deep Dish","South Side Thin Crust"],"tacos":"Anything not from Taco bell","burgers":"Portillos Burgers", "ice_cream":["Chocolate","Vanilla","Oreo"], "shakes":[{"oberwise":"Chocolate", "dunkin":"Vanilla","culvers":"All of them","mcDonalds":"Sham-rock-shake","cupids_candies":"Chocolate Malt"}]}'
let obj1 = JSON.parse(person3);
console.log(obj1.pizza)
console.log(obj1.tacos)
console.log(obj1.burgers)
console.log(obj1.ice_cream)
console.log(obj1.shakes)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Person(name, age) {
    this.name = name;
    this.age = age;
}


Person.prototype.printInfo = () => {
    console.log(this.name)
    console.log(this.age)
}
Person.prototype.addAge = () => {
    console.log(this.age)
    a = this.age +1 
    
    console.log(`Adding age: ${a}`)
}

let Person1 = new Person('Chloe', 1);
let Person2 = new Person('Erin', 10);

console.log(Person1);

console.log(Person2);

Person1.printInfo();
Person2.printInfo();


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let pro = new Promise((resolve, reject) => {
    const str = 'Life, the universe and everything. Answer:';
    if (str.length >10) {
        resolve('Big word')
    } else {
        reject('Small Number')
    }
})

pro.then((message)=>{
    console.log(message)
}).catch((message) => console.log(message))

