/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//empty object called animal
var animal = {};
// dot notation, add species dog
animal.species = 'dog';
// bracket notation, add name your animal's name
animal['name'] = 'Maruko';
// give animal noises empty array
animal['noises'] = [];
//print animal to console
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//variable noises = empty array
var noises = [];
// give noises first element w/ bracket notation with a string noise
noises[0] = 'woof';
// push a noise to the end of noises
noises.push('bork'); 
// unshift noise to the beginning
noises.unshift('snort');
// add another element to the end w/ bracket notation (do not hard code)
noises[noises.length] = 'whine';

console.log(noises.length); 
console.log(noises[noises.length-1]); 
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// w/ bracket notation, assign noises property on new noises array
animal['noises'] = noises;
// add another noise
animal.noises.push("huff");

console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * 
 * Properties of objects can be accessed with dot or bracket notation. 
 *
 * 2. What are the different ways of accessing elements on arrays?
 * 
 * Elements of arrays can be accessed with bracket notation.
 * The array method pop() changes the original array and also returns the last element.
 * The array method shift() changes the original array and returns the first element
 * Arrays can be changed with the push, unshift, and splice methods. 
 * 
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */


//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

//make variable animals assigned to empty array
var animals = [];
// push our animal into animals
animals.push(animal);
console.log(animals); // dog object added to array

//create variable duck and assign it to data provided
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck); 
console.log(animals); // now dog and duck are in array

//make 2 more animal object and add it to animals
var frog = { species: 'frog', name: 'Keroro', noises: ['ribbit', 'squish']};
animals.push(frog);

var horse = { species: 'horse', name: 'Fabio', noises: ['neigh', 'whinny']};
animals.push(horse);

console.log(animals); // now dog, duck, frog, horse are in array



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// choose a data structure to hold list of friends
// Array, because arrays can hold our friend objects. Arrays are also simpler to access/ loop through/ manipulate than objects

var friends = [];

/* Math.random()
this is a static method that returns a floating point between 0 and 1 
takes no parameters
console.log(Math.random()); => random number like 0.1021 prints to console
*/

// write a function called getRandom that takes animals array and returns a random index using Math.random()


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}