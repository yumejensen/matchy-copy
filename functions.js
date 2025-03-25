/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* Instructions
Implement a function declaration called `search` that:
   - Takes a paramater representing an Array of `animals`.
   - Takes a paramater representing a String, the name of an animal on which to perform a search.
   - Looks through the `animals` Array, and returns the animal's Object if an animal with that name exists.
   - Returns `null` if no animal with that name exists
*/

function search (arrayOfAnimals, nameOfAnimal){
    // looks through animals array and returns the animal's objects - for loop
    // IF there is an object with an animal that has that name - if statement
    for (i = 0; i < arrayOfAnimals.length; i++){
        if (arrayOfAnimals[i]['name'] === nameOfAnimal){
            return arrayOfAnimals[i];
        } 
    }
    return null; // this returns after everything in the loop was checked and nothing matches
}



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* Instructions
Write a function declaration called `replace` with a signature of `replace(animals, name, replacement) { //... } ` that:
   - Takes 3 parameters, an Array of animals, a String representing  the name of an animal on which to perform a search, and an Object that represents the replacement animal.
   - If an animal with that name exists within the `animals` Array, replace it's entire Object with the replacement Object.
   - Otherwise do nothing.
*/

function replace (arrayOfAnimals, nameOfAnimal, newAnimal){
    // if nameOfAnimal exists inside arrayOfAnimals, replace that animal with replacementAnimal
    // for loop to go over array, if statement to replace
    for (i = 0; i < arrayOfAnimals.length; i++){
        if (arrayOfAnimals[i]['name'] === nameOfAnimal){
            // splice method to delete and replace
            arrayOfAnimals.splice(arrayOfAnimals[i], 1, newAnimal);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
Write a function declaration called `remove` with a signature of `remove(animals, name)` that:
   - Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
   - If an animal with that name exists within the `animals` Array, remove it.
*/
function remove (arrayOfAnimals, nameOfAnimal){
    //for loop to go over array of animals
    // if statement to say, if that animal is there, delete it
    for (i = 0; i < arrayOfAnimals.length; i++){
        if (arrayOfAnimals[i]['name'] === nameOfAnimal){
            // splice method to delete that animal
            arrayOfAnimals.splice(arrayOfAnimals[i], 1);
        }
    }
}



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
Write a function declaration called `add` with a signature of `add(animals, animal) { //... }` that:
   - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
   - Checks that the animal Object has a `name` property with a length > 0.
   - Checks that the animal Object has a `species` property with a length > 0.
   - Has a **unique** name, meaning no other animals have that name.
   - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
*/

function add (arrayOfAnimals, newAnimal){
    // checks if newAnimal has a name property with length > 0
    // checks if newAnimal has species property with length > 0
    // checks if newAnimal has a unique name - for loop
    for (i = 0; i < arrayOfAnimals.length; i++){
        if (newAnimal['name'].length > 0 && newAnimal['species'].length > 0 && newAnimal['name'] !== arrayOfAnimals[i]['name']){
            arrayOfAnimals.push(newAnimal);
        }
    }

    // if all these conditions pass add newAnimal to animals array
}




/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}