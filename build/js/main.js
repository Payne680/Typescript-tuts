"use strict";
// let myName: string = 'Penn'
// let meaningOfLife: number;
// let isLoading: boolean;
// let album: any;
// myName = 'malone'
// meaningOfLife = 23
// isLoading = true
// album = 123
// const  sum = (a: number, b: number) => {
//    return a + b;
// }
// let postId: string | boolean;
// let isActive: number | boolean;
// let re: RegExp = /\w+/g
let stringArr = ['one', 'hey', 'Penn'];
let guitars = ['strat', 'Les Paul', 5190];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'Malone';
stringArr.push('bob', 'mike');
guitars[0] = 'Anderson';
guitars.unshift('jim');
let test = [];
let band = [];
band.push('bob', 'Hawkins', 'Micheal');
band.unshift('Alexander');
//Tuple
let myTuple = ['Penn', 23, true];
let mixed = ['Jugi', 20, false];
mixed = myTuple;
//Objects
const exampleObj = {
    prop1: 'Mike',
    prop2: 23
};
exampleObj.prop1 = 'Brozeen';
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1997, 1999, 'WonderFul']
};
console.log(stringArr);
console.log(guitars);
console.log(band);
console.log(mixed);
console.log(evh);
