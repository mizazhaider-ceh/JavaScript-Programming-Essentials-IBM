


// Create one block using {} and declare variables using let, const, and var.
{
    var variable_var1 = "Using Variable with var inside {} as block level";
    let variable_var2 = "Using Vairable with Let inside {} as block level ";
    const variable_var3 = "Using Varubale with Const inside {} as block level"; 

   // Then, try to reassign these variables within the curly braces {}. Check for any errors that may occur.

    
    // var variable_var1 = "Using Var"; //error
    // let variable_var2 = "Using Let";  //error
    // const variable_var3 = "Using Const";  //error
}


// Next, try to reassign the same variables outside the block {} and check if assignment outside the sope of variables where the variables are assigned can be done or not.

var variable_var1 = "Using Variable with var outside {} as global level";
let variable_var2 = "Using Vairable with Let outside {} as global level ";
const variable_var3 = "Using Varubale with Const outside {} as global level"; 

console.log(variable_var1);
console.log(variable_var2);
console.log(variable_var3);