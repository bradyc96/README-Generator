// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'list',
    name: 'license',
    message: 'Select a license for your project.',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0']
  },
  {
    type: 'list',
    name: 'badge',
    message: 'Select the badge for your project.',
    choices: ['License-MIT-blue', 'License-Apache-2.0-red', 'License-GPL-3.0']
  },
  {
    type: 'input',
    name: 'GitHub',
    message: 'What is your GitHub name?',
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of this project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description for this project?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use this app?',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What is the contribution guidelines?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What are the test instructions?',
  },];
    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('Succesfully created README')) 
}




// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        
        .then((answers) => {
            console.log(answers)
            const PageContent = generateMarkdown(answers);
            writeToFile('./README.md', PageContent)
        })
}

// Function call to initialize app
init();


