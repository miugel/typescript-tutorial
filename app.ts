// Core types: string, number, boolean
const add = (num1: number, num2: number): number => {
    return num1 + num2;
};

// Same thing because of type inference
const num1: number = 1;
const num2 = 2;

console.log(add(num1, num2));

// Objects
const person: { name: string, age: number } = {
    name: 'Miguel',
    age: 22
};

console.log(person.name);

// Arrays
let hobbies: string[];
hobbies = ['coding', 'keyboards'];

// Can use any[] if array will contain different data types

// Tuples, fixed array
// | (pipe) can be used to declare two possible types
// TypeScript will not enforce when pushing to a tuple
let skills: [string, number];
skills = ['testing', 256];
console.log(skills);

// Enums, assigns labels to number
// When dealing with variable constants
// Can assign any number you want, or string
// From testing, it looks like you cannot use a string if undefined values are in front
enum Role { USER, ADMIN, DEVELOPER = 'DEVELOPER' };
console.log(Role.USER);
console.log(Role.ADMIN);
console.log(Role.DEVELOPER);

// Any will allow any data type, use carefully

// Unions
// May require runtimes checks
const combine = (value1: number | string, value2: number | string, conversion: 'as-string' | 'as-number'): any => {
    if (typeof value1 === 'number' && typeof value2 === 'number') {
        return value1 + value2;
    } else {
        return String(value1) + String(value2);
    };
};

// Literal type, when the type of a variable is an exact value
// Using extra argument to help deal with unions
// Setting constants with union helps developer know the third argument should only be one of the two, strong typing, very helpful

// Type aliases
type stringOrNumber = string | number;
type randomAlias = 'as-string' | 'as-number';

// Functions
const addTogether = (num1: number, num2: number): number => {
    return num1 + num2;
};
// Return type void when nothing is being returned in a function
// Undefined is a valid type as well, but not valid here when the type is void, even though the function returns undefined
// If declaring undefined type, need a return in function

// There is a function type, but TypeScript becomes unreliable when working with pointers
let functionPointer: Function;
functionPointer = add;

// Function type
let anotherFunctionPointer: (a: number, b: number) => number;
// Good for callback functions

// Unknown type
// Similar to any, but a little more strict
let randomVariable: unknown;
randomVariable = 'test';
let anotherRandomVariable: string = 'test';

// Will work without if statement with randomVariable declared as the any type, but not unknown
if (typeof randomVariable === 'string') {
    anotherRandomVariable = randomVariable;
};

// Use when you are unsure of exactly what you want to do with the variable, just add a check to make sure it's the correct type

// Never type, when a function 'never' returns anything
// For example, a function that throws an error or that has an infinite loop
// If undeclared, type inferred will be void, since never is a bit newer
const randomFunction = (parameter1: string, parameter2: number): never => {
    throw { message: parameter1, errorCode: parameter2 };
};