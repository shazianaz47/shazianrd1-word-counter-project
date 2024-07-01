#! /usr/bin/env node

//importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";

//Display and Colorfull Welcome message
console.log(chalk.bold.redBright("\n\t\t Word Counter With Shazia Naz"));
console.log(chalk.cyanBright("=".repeat(60)));

//prompt the user to enter a sentence
let answers= await inquirer.prompt(
    [
        {
            name:"sentence",
            type:"input",
            message:"Enter a sentence", 
        }
    ]
);

//trimming the sentence and spliting it into words based on "spaces"
let words=answers.sentence.trim().split(" ");

//analysis of user input sentence
console.log(chalk.cyanBright("=".repeat(60)));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold.cyanBright(`\n - Word Count:${chalk.bold.redBright(words.length)}`));
console.log(chalk.cyanBright("=".repeat(60)));