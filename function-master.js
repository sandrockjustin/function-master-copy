//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // code

    let localArray = [];

    for (var key in object){

        localArray.push(object[key]);

    }

    return localArray;

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {

    let localArray = [];

    for (var key in object){

        localArray.push(key);

    }

    return localArray.join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    
    let localArray = [];

    for (var key in object){

        if (typeof object[key] === "string"){

            localArray.push(object[key]);
        
        };

    };

    return localArray.join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {

    if (Array.isArray(collection)){

        return 'array';

    } else if (typeof collection === 'object'){

        if (collection !== null && collection !== undefined && !(collection instanceof Date)){

            return 'object';
            
        }

    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {

    let localArray = string.split("");
    localArray.splice(0, 1, localArray[0].toUpperCase());
    
    return localArray.join("");
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {

    // dissected the string into an array so that we can access and modify words individually
    let localArray = string.split(" ");

    // looping over every index in the localArray (i.e. the strings) to perform an action
    for (let i = 0; i < localArray.length; i++){

    // you have to do an assignment here; that was my main issue
    // i was forgetting to actually reassign the values inside of the localArray; replace() appears to return a new array
    localArray[i] = localArray[i].replace(localArray[i][0], localArray[i][0].toUpperCase());

    }

    // undoing our dissection on line 100
    return localArray.join(" ");


}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {

    return "Welcome " + capitalizeWord(object["name"]) + "!";

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {

    return capitalizeWord(object['name']) + " is a " + capitalizeWord(object['species']);

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {

    if (object.hasOwnProperty('noises') && object['noises'].length !== 0){

        return object['noises'].join(" ");

    } else {

        return "there are no noises";

    }

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

    let localArray = string.split(" ");

    for (let i = 0; i < localArray.length; i++){

        if (localArray[i] === word){

            return true;

        }

    }

    return false;

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {

    object['friends'].push(name); 
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object){

    if (object.hasOwnProperty('friends')){

        for (let i = 0; i < object['friends'].length; i++){

            if (object['friends'][i] === name) {
    
                return true;
    
            }
        
        }
    }

    return false;

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

    let noRelationList = [];

    for (let i = 0; i < array.length; i++){

        if (isFriend(name, array[i]) === false && name !== array[i]['name']){

            noRelationList.push(array[i]['name']);

        }

    }

    return noRelationList;

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

    if (object.hasOwnProperty(key)){

        object[key] = value;
        return object;
      
    } else {

        object[key] = value;
        return object;

    }

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
  
    for (let i = 0; i < array.length; i++){
      
      if (object.hasOwnProperty(array[i])){
        
        delete object[array[i]];
        
      } 
      
    }
    
    return object;
    
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

    // I had to look this one up
    // the ... is an operator that iterates over every item of an array/object
    // the Set() is a native object that does not allow for items to repeat
    // by declaring ...new Set() we are iterating over the input array and declaring it as a new instance of Set()
    let localArray = [...new Set(array)];
    return localArray;

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}