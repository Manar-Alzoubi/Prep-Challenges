'use strict';


// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {
    let str2 = "";
    for (let i = string.length - 1; i >= 0; i--) {
        str2 += string[i];
    }
    return str2;
}
// -------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

const detectFace = (arr) => {
    let newArr = [];
    for(let i=0; i<arr.length;i++){
      let str = arr[i];
      let reg=/\^_\^/g;
       if(reg.test(str)){
         newArr.push(str);
       }
    }
    return newArr;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes in a string and returns a string contains only characters in even positions.
//
// Ex :-
// Input <= "coding" output =>"cdn"

const eveCharacter = (str) => {
    const evenArr=[];
    const myArray = str.split('');
    for(let i =0;i<myArray.length;i++)
    {
    if(i %2 === 0 || i==0)
    evenArr.push(myArray[i]);
   var newStr =evenArr.join('')
    }
    return newStr;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:

// Let us consider you are hired as a software developer in a tech company and you are assigned to work on a restaurant web application project .

// And you are assigned to write function to return only ingredients that contains chicken.
//
// Input:
// [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
//
// Output:
// [["grilled chicken"], ["baked chicken"], ["fried chicken"]];


const chickenGradients = (arr) => {
    let newArr = [];
    for(let i=0; i<arr.length;i++){
       for(let j=0; j<arr.length;j++){
      let str = arr[i][j];
      console.log(arr[i][j]);
      let reg=/(chicken)$/g;
       if(reg.test(str)){
         newArr.push(str);
       }}
    }
    return newArr;
}
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };
