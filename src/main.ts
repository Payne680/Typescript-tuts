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


let stringArr = ['one', 'hey', 'Penn']

let guitars = ['strat', 'Les Paul', 5190]

let mixedData = ['EVH', 1984, true]

stringArr[0] = 'Malone'
stringArr.push('bob', 'mike')

guitars[0] = 'Anderson'
guitars.unshift('jim')

let test = [];

let band: string[] = [];
band.push('bob', 'Hawkins', 'Micheal')
band.unshift('Alexander')

//Tuple
 let myTuple: [string, number, boolean] = ['Penn', 23, true]

 let mixed = ['Jugi', 20, false]

 mixed = myTuple

//Objects
const exampleObj = {
    prop1: 'Mike',
    prop2: 23
}

exampleObj.prop1 = 'Brozeen';

interface Guitarist  {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1997, 1999, 'WonderFul']
}

let jp: Guitarist = {
    name: 'Jimmy',
    active: true,
    albums: ['1', '2', 'Awsome']
}

const greetGuitarist = (guitarist: Guitarist) => {
    if(guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`
    }
    return `Hello`
}

console.log(stringArr);
console.log(guitars);
console.log(band);
console.log(mixed)
console.log(evh)
console.log(greetGuitarist(evh));