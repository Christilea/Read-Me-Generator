const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");
// Questions asked to the user
 const readmeQuestions = () => {
  return inquirer.prompt([

{
    type: "input",
    name: "title",
    message: "What is your README Title?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of the project:",
  },
  {
    type: "input",
    name: "install",
    message:
      "Enter install instructions for the project (I.E. NPM commands):",
  },
  {
    type: "input",
    name: "usage",
    message: "Please explain how to use the application:",
  },
  {
    type: "list",
    message: "Please select a license to display for the README: ",
    name: "license",
    choices: ["MIT", "GPL", "Apache", "BSD", "MIT/Apache-2.0"],
  },
  {
    type: "input",
    name: "contributions",
    message: "Enter any other contributions to this project:",
  },
  {
    type: "input",
    name: "tests",
    message: "Please enter any testing instructions:",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your github username:",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address:",
  },
]);
};

const writeFileAsync = util.promisify(fs.writeFile);

// Create function to initialize app
const init = () => {
	readmeQuestions()
		.then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
		.then(() => console.log('Successfully wrote to README.md'))
		.catch((err) => console.error(err));
};

// Function to initialize app
init();