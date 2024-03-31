#! /usr/bin/env node
import inquirer from "inquirer";
// 1. Computer will generate a random numb 
// 2. user input for guessing numb
// 3. compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1-10: ",
    },
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("Congratulations! You  got it right.");
}
else {
    console.log("Alas! You guessed it wrong.");
}
