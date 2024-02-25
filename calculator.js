"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// simple Calculator in Typescript 
const inquirer_1 = __importDefault(require("inquirer"));
let calculatorinput = await inquirer_1.default.prompt([{
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
