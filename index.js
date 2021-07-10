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
    message: "Enter description for your project",
    name: "description",
  },
  {
    type: "input",
    message: "Table Of Contents? Enter Yes/No.",
    name: "tableOfContents",
  },
  {
    type: "input",
    message: "How do you install your Project?",
    name: "installation",
  },
  {
    type: "input",
    message: "usage description?",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter credits",
    name: "credits",
  },
  {
    type: "list",
    name: "license",
    message: "Pick your preferred license.",
    choices:["lic.1", "lic.2", "lic.3"],
  },
  {
    type: "input",
    message: "things to Test",
    name: "test",
  },
  {
    type: "input",
    message: "Enter any questions/FAQ.",
    name: "Faq",
  },
];
//add features, how to contribute. above tests.

// TODO: Create a function to write README file
function writeToFile(userData) {
  // const userData = `${data.name.toLowerCase().split(' ').join('')}.json`;
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
      //use the generated 'markdown ' to 'wrtieToFile("output.md",markdownText)'
    });
  // for answers
  //then we'll user the user's 'answers' to 'generateMarkdown(answers)'
  // and store the results in 'markdownText
}

// // // Function call to initialize app
init();

