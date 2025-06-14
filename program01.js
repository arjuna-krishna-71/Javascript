// Falsy values and coercive values
// FALSY VALUES#######################################################
// Whatever you try to print these types it will return false.
// 1.Undefined 2.Null 3.'' 4.NaN 5.0
// Examples:
// var data = '';--------------------------------
// if(data){
//     console.log("Inside the if block");
// }-----------------------------------
// var a = NaN;
// console.log(typeof a);
// ---NaN is a type Number in which the number is INVALID
// var a = null;
// console.log(typeof a);
// ---Typeof NULL gives an Object as it is a Historical Bug. It is initialized when there is a possibilities of getting the value as OBJECT.
// COERCIVE VALUES#######################################################
// Coercive are the type of values in which the automatic conversion of values from One Data type to Another
// IMPLICIT Coercion#####################################################
// This occurs automatically during the code execution
// Example:
// var a = 10;
// var b = '20';
// console.log(a + b);
// Output: 1020
// If there is a String in the execution it will consider the other value as a String as well.
// EXPLICIT Coercion#######################################################
// This occurs manually converting a value from one type to another using built-in functions or operators such as String(), Number(), parseFloat(), parseInt(), Boolean()
// Example:
// var a = 10;
// var b = '200';
// let c = parseInt(b);
// console.log(typeof c);
// console.log(((a + c)));


// &#^##&(*&#(&#@()*&()#*)#@(*#)(@*#()&#*&#**))----------------HOISTING----------------&#^##&(*&#(&#@()*&()#*)#@(*#)(@*#()&#*&#**))

// Hoisting is a mechanism in the JS where Variables and Functions declarations are moved to the top of their SCOPE before the code is EXEUTED.
// The js will read all over the code first and defines the scope to the GLOBAL scope. Whatever the data in js it will first make the code to be GLOBAL and then starts execution.
// Examples:
// USING VAR:
// console.log(a); //undefined
// var a = 10;

// -- JS hoists the declaration (var a) but not the assignment(a=10). So it's like:
// var a;
// console.log(a);  //undefined
// var a = 10; 

// USING LET or CONST:
// console.log(b);
// ReferenceError: Cannot access 'b' before initialization
// let b = 10;
// -- Let and const are hoisted, but they are not initialized. They stay in the Temporal Dead Zone (TDZ) until the line where they are defined.

// ***********************************FUNCTIONS********************************************
// FUNTION HOISTING
// Types: Named Functions, Anonymous Functions(Function Expressions), Arrow Functions
// Named Functions: These are the Normal way of declaring a function. These are typically used when the same code needs to be executed multiple times throughout a program.
// Need to be declared once and can be used anywhere you want. Can be called and used before declaring but it SHOULD to be DECLARED.
// --- Entire function declarations are hoisted, so you can use them before defining.
// Example:
// Superman();  //Joe Doe
// function Superman(){
//     let a = "Joe Doe";
//     console.log(a);
// }
// Anonymous Function or Function Expressions:
// The functions are declared in with the data types and then initialized
// Superman(); // TypeError: Superman is not a funcion
// var Superman = function(){
//     console.log("Joe Doe");
// };
// Here only the var Superman is Hoisted as (undefined), not the function body.