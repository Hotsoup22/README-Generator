// // TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
    - What was your motivation?
    - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
    - What problem does it solve?
    - What did you learn?"
    ---`,
    name: "description",
  },
  {
    type: "input",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples for use. Include screenshots as needed.",
    name: "usage",
  },
  {
    type: "input",
    message: `List your collaborators, if any, with links to their GitHub profiles.
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  If you followed tutorials, include links to those here as well.`,
    name: "credits",
  },
  {
    type: "list",
    name: "license",
    message: "Pick your preferred license."+ `If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/)`,
    choices:["MIT", "Apache 2.0", "GNU GPL v3", "GNU GPL v2"],
  },
  {
    type: "input",
    message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
    name: "test",
  },
  {
    type: "input",
    message: `If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.
     The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.`,
    name: "Contribution",
  },
  {
    type: "input",
    message: "Enter Email-Address",
    name: "Email",
  },
  {
    type: "input",
    message: "Enter gitHub Username:",
    name: "gitHubUserName",
  },
];


// TODO: Create a function to write README file
function writeToFile(userData) {

  const fs = require("fs");
  fs.writeFile("output.md", generateMarkdown(userData), (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// // TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)

    .then((userData) => {
      writeToFile(userData);
      userData = questions.name;
    
    });

}

// // // Function call to initialize app
init();

