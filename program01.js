// $*#@&$*&#$(**&#()$*#()$*#()$*(#*$)(#@*$)(&%(*&#*%&*%*&)(&%*()))) ________________________________JAVASCRIPT________________________________*%$(*#)(%*$()#*%_()*%_)(#_)%(#_)(_)#(_)#$&
// _________________________________________________________________________________________________Brendan Eich______________________________________________________________
// ----> Javascript was developed by BRENDAN EICH in 1995 while working at Netscape Communications. He created the langauge in just "TEN" days ti enable interactive web pages.
// ----> Initially it was name "Mocha" and later "LiveScript" before settling on "JAVASCRIPT".

// @((*&*@&@**@$*()@*()@*#()*))---------------------------ECMAScript-----------------------&$(*&^$(@^^#^$^@&$(*@&#*())))

// -- In previous there are lot of scripting langauges like javascript, action script, Jscript which were competing with each other
// -- This behaviour made the BROWSER to be difficult for supporting all of them.
// --------> In 1996 the development of ECMAScript started.
// --------> So, later in 1997 the first version of the ECMAScript was adopted.
// --------> Upto ES1,ES2,ES3,ES4,ES5,ES6 they are named after "ES", but later from 2016 they are named after the year fully like ECMAScript 2016,...


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

// !#@&^#@#^@#&^(*&(*@!(**(*@*(**#)(*@#)(*#)))))-------------------------------ARRAYS-----------------------------&*$&(*&$(**@^&*^&&^(*#&$(*&#@$#$(*#$&(*@#&$(*&#$(*(*#$&)))))))

// const a = new Array("Jaganadhan"); ----------------------------------------------*********************
// a.push("Jaganadhan");
// console.log(Array.from('hi')); //Output : ['h','i']

// function isEven(e){
//     return e%2===0;
// }
// let array = [2,4,6];
// let res = array.every(isEven);
// console.log(res);

// #######################CallBack####################################
// A callback function is a function in which it does not have a name  rather it have a return typeof.
// let array = [2,3,4]
// let res = array.every((e)=>e>=2);
// console.log(res);
// output: true

// let res3 = array.every((e)=>(e>=2));
// console.log(res3);
// output: true
// -- These both are same type and will give the same value

// let res2 = array.every((e)=>{return e>=2});  //If the Curly braces are place then the RERTURN keyword is necessary********************************************************
// console.log(res2);
// output: true
// OR ELSE
// let res4 = array.every((e)=>{e>=2});
// console.log(res4);
// output: false
// &$&*#@&(&(*()*))--------Fill and Filter---------------&*&(*&(*(*)(*)))
// ---------FILL------------------
// Syntax: Array.fill(Replacing Value, Inclusive startingIndex,exlusive endIndex);
// let array = [2,3,5,6];
// let res = array.fill('j',1,3);
// console.log(res);
// Here, the Inclusice means RERPLACING the starting index value also and Exclusive means NOT-Replacing this value.
// In the above example, 
// the 'j' -> Is the replacing value
// the 1 -> Represents the Replacable Starting Index to be replaced
// the 3 -> Represents the Not Replacing end index value.
// The Inclusice is including this value also.
// The Exclusive is Excluding this value and replacing the values before this value and Excluding this value. 
// let array = new Array(8);
// console.log(typeof array);
// let res = array.fill('V',7,9);
// console.log(typeof res);  //Output: Object
// // output:
// // [ <8 empty items> ]
// // [ <7 empty items>, 'V' ]

// ----------------------------------FILTER----------------------------------
// --> Filter will return an Array based on the condition.
// Need to have a CALLBACK function to return the function.
// We need to STORE the value of the returned array in a new variable to use it in future.
// let arr = new Array(88,99,45,100);
// let res = arr.filter(SampleFunction);
// console.log(res);
// function SampleFunction(e){
//     return e>88;
// }
// --> Filter is mostly used in the time where we need to get a new array based on the condition.
// let obj = {
//     name:"Jagan",
//     age:24,
//     IsMarried:false
// };
// let data = obj.keys.filter((e)=>e.name);
// console.log(data);
// --> If you try this using an Object this will not work

// &^&%&^&*&()*()^&^&*^@#(@*&(*#)())------------------Slice and Splice------------------&^&^^%*(&(*()*)*)(_)
// --------------SLICE------------------------
// Syntax: array.slice(Inclusive Starting index,Exclusive End Index)
// --> Here, the Inclusive means it will includes in the value and the Exclusive means it will return before this index value.
// --> SLICE is like SLICING a CAKE in two slices to get the peice.
// let array = [546,754,856,789,888,987,908];
// let res = array.slice(1,4);
// // here the 1 is the inclusive value on INDEX '1' and the 4 is the exclusive value of INDEX '4'
// // console.log(res);
// // So the result will be: on index1 inclusive 754 and on the index4 888 exclusing. OUTPUT : [754,856,789]
// let res2 = array.slice(4);
// console.log(res2);
// // --> If you give only a single value in slice then it will slice away the values which are below the index value. Here the result will [888,987,908]
// // -->The single value represent the Inclusive value and it is not having the EXCLUSIVE value.
// ---------------SPLICE------------------------
// Syntax: array.splice(Inclusive Starting indexedDB,Total number of values to be deleted COUNT,The Value to be REPLACED)
// --> It is same as the FILL method but here we are passing the replacable values as the LAST parameter and the we are sending the second parameter as Count of nmbers to be deleted
// ----->FILL is mostly used for INITIALIZATION purpose while the STATE needs to be in the inital state while LOADING but the SPLICE can be USED in the CORE Functionalities.
// let array = [546,754,856,789,888,987,908];
// let res = array.splice(1,3,"Hello","After","Splice");
// console.log(res);
// console.log(array);
// -->In SPLICE you can directly use the main array to get the updated array
// let array = [1,23,55];
// let res= array.splice(2);
// console.log(res);
// console.log(array);



