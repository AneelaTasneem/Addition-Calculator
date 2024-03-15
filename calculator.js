// Improting inquirer:
import inquirer from "inquirer";
// creating a variavble for input1:
const input1 = await inquirer.prompt({
    name: "num1",
    type: "number",
    message: "Kindly enter your 1st number."
});
// creating a variavble for input2:
const input12 = await inquirer.prompt({
    name: "num2",
    type: "number",
    message: "Kindly enter your 2nd number."
});
//  Creating a variable of total of two values:
let total = input1.num1 + input12.num2;
// Printing Total:
console.log(total);
