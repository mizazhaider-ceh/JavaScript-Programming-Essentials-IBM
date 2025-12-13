// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
// console.log(blockVar);
// console.log(blockLet);

//Note: A ReferenceError occurs when code attempts to use a variable that has not been declared or is outside of its scope, preventing proper access or execution.


function show(){
    var functionVar = "I'm a block-scoped var in function";
    let functionLet = "I'm a block-scoped let in function";
    const functionConst = "I'm a block-scoped const in function"; 

        
    console.log(functionVar); 
    console.log(functionLet); 
    console.log(functionConst);

}

show();

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError

// Note: You will only see an error for functionVar because it acts as a blockage, preventing the execution of the subsequent lines of code.