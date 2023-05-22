"use strict";
// let myName: string = 'Penn'
// let meaningOfLife: number;
// let isLoading: boolean;
// let album: any;
//  Literal types
let userName;
userName = 'Amy';
//functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(2, 5));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {(a: number, b:number): number}
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 8));
