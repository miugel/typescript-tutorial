// Core types: string, number, boolean
var add = function (num1, num2) {
    return num1 + num2;
};
// Same thing because of type inference
var num1 = 1;
var num2 = 2;
console.log(add(num1, num2));
// Objects
var person = {
    name: 'Miguel',
    age: 22
};
console.log(person.name);
// Arrays
var hobbies;
hobbies = ['coding', 'keyboards'];
// Can use any[] if array will contain different data types
// Tuples, fixed array
// | (pipe) can be used to declare two possible types
// TypeScript will not enforce when pushing to a tuple
var skills;
skills = ['testing', 256];
console.log(skills);
// Enums, assigns labels to number
// When dealing with variable constants
// Can assign any number you want, or string
// From testing, it looks like you cannot use a string if undefined values are in front
var Role;
(function (Role) {
    Role[Role["USER"] = 0] = "USER";
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role["DEVELOPER"] = "DEVELOPER";
})(Role || (Role = {}));
;
console.log(Role.USER);
console.log(Role.ADMIN);
console.log(Role.DEVELOPER);
// Any will allow any data type, use carefully
// Unions
// May require runtimes checks
var combine = function (value1, value2, conversion) {
    if (typeof value1 === 'number' && typeof value2 === 'number') {
        return value1 + value2;
    }
    else {
        return String(value1) + String(value2);
    }
    ;
};
// Functions
var addTogether = function (num1, num2) {
    return num1 + num2;
};
// Return type void when nothing is being returned in a function
// Undefined is a valid type as well, but not valid here when the type is void, even though the function returns undefined
// If declaring undefined type, need a return in function
// There is a function type, but TypeScript becomes unreliable when working with pointers
var functionPointer;
functionPointer = add;
// Function type
var anotherFunctionPointer;
// Good for callback functions
// Unknown type
// Similar to any, but a little more strict
var randomVariable;
randomVariable = 'test';
var anotherRandomVariable = 'test';
// Will work without if statement with randomVariable declared as the any type, but not unknown
if (typeof randomVariable === 'string') {
    anotherRandomVariable = randomVariable;
}
;
// Use when you are unsure of exactly what you want to do with the variable, just add a check to make sure it's the correct type
// Never type, when a function 'never' returns anything
// For example, a function that throws an error or that has an infinite loop
// If undeclared, type inferred will be void, since never is a bit newer
var randomFunction = function (parameter1, parameter2) {
    throw { message: parameter1, errorCode: parameter2 };
};
