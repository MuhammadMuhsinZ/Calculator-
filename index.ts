// practice of simple calculator 
import inquirer from "inquirer";
let sum = [] 
let loop = true 
while(loop){
let calculatorinput = await inquirer.prompt([
{
    type:`number`,
    name:`Number1`,
    message:`Please enter your frist number:`
},
{
    type:`number`,
    name:`Number2`,
    message:'Please enter your second number:'
},
{
    type:`list`,
    name:'operations',
    message:'Chose your operattions:',
    choices:["Addition","Subtraction","Multipilaction","Division"]
},
{
    type:`confirm`,
    name:'AddmoreSum',
    message:"Please Add more Sum in Calculator",
    default: false 
}
])
console.log(calculatorinput)
if (calculatorinput.operations === "Addition"){
    console.log(calculatorinput.Number1 + calculatorinput.Number2)
};
if (calculatorinput.operations === "Subtraction"){
    console.log(calculatorinput.Number1 - calculatorinput.Number2)
};
if (calculatorinput.operations === "Multipilaction"){
    console.log(calculatorinput.number1 * calculatorinput.Number2)
};
if (calculatorinput.operations === "Divison"){
    console.log(calculatorinput.Number1 / calculatorinput.Number2)
};
};