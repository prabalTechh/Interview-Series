//Closure 
// A closure gives you access to an outer function's scope(Reference to outer parent Lexical Enviroment) from an inner function.
// In JavaScript, closures are created every time a function is created, at function creation time.

// function a(){
//     var dob = 5;
//     function b(){
//         console.log(dob);
//     }
//     b();
// }
// a();

// here we know that the local memory of an lexical enviroment has also have a memory in parent lexical enviroment 



//Here a function can also be invoked(Return a Function) like this to in JS:-

// function a(){
//     var dob = 10;
//     function b(){
//         console.log(dob);
//     }
//     return b;
// }
// var eww = a();
// console.log(eww);
// eww();


// OR

function a(){
    var dob = 10;
    return function b(){
        console.log(dob);
    }
    
}
var eww = a();
console.log(eww);
eww();



// at the end 
// A function along with lexical scope bundler is know as closure