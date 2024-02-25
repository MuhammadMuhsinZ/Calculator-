// simple Calculator in Typescript 
import inquirer from "inquirer";
let calculatorinput = await inquirer.prompt([{
        type: `number`,
        name: `num1`,
        message: `inter your first number`
    },
    {
        type: `number`,
        name: `num2`,
        message: `inter your second number`
    },
    {
        type: `list`,
        name: `operatoration`,
        message: `enter your operator`,
        choices: [`addition`, `subtraction`, `multipilaction`, `division`]
    }]);
console.log(calculatorinput.operatoration);
// Additions 
if (calculatorinput.operatoration === `addition`) {
    console.log(calculatorinput.num1 + calculatorinput.num2);
}
// Subtraction 
else if (calculatorinput.operatoration === `subtraction`) {
    console.log(calculatorinput.num1 - calculatorinput.num2);
}
// Multipilaction 
else if (calculatorinput.operatoration === `multipilaction`) {
    console.log(calculatorinput.num1 * calculatorinput.num2);
}
// Division
else if (calculatorinput.operatoration === `division`) {
    console.log(calculatorinput.num1 / calculatorinput.num2);
}
;
