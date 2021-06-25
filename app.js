console.log("test");

//Variables
/*
1. Create a variable that contains your name as a value. Name the variable appropriately.
2. Create a constant that contains the number of states in the U.S. and name it appropriately.
3. Create a variable that contains a boolean value and name it appropriately.

difference between block scoped (selection and loops most common block scoped) verses function scoped can use outside of scope
*/

let myName = "ANNA";        //declared with let, variable identifier myName, let block scoped
const numberOfState = 50;   // const block scoped
var Female = true;          //boolena value either true or false, function scoped

//Operators
/*
1. Compute the result of adding 5 and 4 and store it in an appropriately named variable.
2. Compute the result of comparing 5 being greater than 4 and store it in an appropriately named variable.
3. Compute the result of multiplying 231 and 4 and store it in an appropriately named variable.
4. Compute the result of negating the value of product and store it in an appropriately named variable.
*/

let sum = 5 + 4;            //9
let greaterThan = 5 > 4;    //true
let multipy = 231 * 4;      //924
product = 231 * sum;        //2,079, bonus question 
let opposite = -product;    //if use ! it will evaluate things in a boolean; in product 231 is true its a number a false is 0

console.log(opposite);



//Comments

/*
1. Add comments to your code to document its functionality.
- Add at least one single line comment
- Add at least one multi-line comment
*/



//Functions

/*
1. Write a function called sayHello that displays an alert that says Hello World!
- Call the sayHello function.

2. Write a function called checkAge that takes two arguments: one for a name and one for an age.
- If the age is less than 21, display an alert that says, "Sorry " + name + ", you aren't old enough to view this page!"

3. Call the checkAge function 4 times with the following people: Charles who is 21, Abby who is 27, James who is 18, and John who is 17.

*/

function sayHello(){
    alert("Hello World!")
}
sayHello();



function checkAge (name, age) {
       if (age < 21){ 
       alert = (`Sorry ${name} you aren't old enough to view this page!`);  //this is note a regular string it is a string interpolation, template string because we used ` and not "
        }
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);


// let name = prompt("What is your name?"); let age = prompt("What is your age?"); if want prop up box


//Charles 21  Abby 27 James 18 John 17



//Objects
/*
1. Create an array of your favorite vegetables and name it accordingly.
- Use a loop to print each of your favorite vegetables to the developer console.

2. Create an array of 5 objects that contain name and age properties.
- Make up names and ages for each object, making sure some are younger than 21 and some are 21+.
- Use a loop to call the checkAge function for each object in the array, passing the object's name and age as arguments (parameters).
*/
const favoriteVeggies = ['carots', 'brussel sprouts', 'corn'];

favoriteVeggies.forEach((veggie) => {
    console.log(veggie);
});
//or

for (let i =0; i <favoriteVeggies.length; i++) {
    console.log(favoriteVeggies[i]);
}
//bonus array of objects: using checkage above. use a forEach so for each friends in the arry

const friends = [
    {name: "ben",
    age:21},
    {name: "ben2",
    age:25},
    {name: "ben5",
    age: 12},

];

friends.forEach(function (friend) {
    checkAge(friend.name, friend.age);
});


/*
3. Create a function called getLength that takes any word as an argument (parameter).
- The function should return the number of characters in the string.

function getLength(word) {
    return word.length;          
}

- Call the getLength function, passing 'Hello World' as the argument (parameter).

let length = getLength ("Hello World")

- Store the returned result of that function in a variable. If the number is even, display 'The world is nice and even!' in the developer console. Otherwise if the number is odd, display 'The world is an odd place!' in the developer console.
*/


function getLength(word) {
    return word.length;          
}

let length = getLength("Hello World!");


if (length % 2 ==0){
    console.log ('The world is nice and even!')
}
else {
    console.log ('The world is an odd place!')
}


//this is a high order function because it has a function within it. like a forEach
function checkAge1 (thresholdAge, whatToCheck) {
    return function (name, age) {
        if (age < thresholdAge) {
            alert(`Sorry ${name}, you are not old enough to ${whatToCheck}.`);
        } else {
            alert(`Congrats ${name}! You are old enough to ${whatToCheck}.`);
        }
    };
}

let checkAlabamaLicense = checkAge1(16, "drive");
let checkMassachussetsLicens = checkAge1(18, "drive");

checkMassachussetsLicens ("Evan", 23);