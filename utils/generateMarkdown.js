// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
//  --WHEN I enter my email address
//  --THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

function renderLicenseSection(license) {
  license = `${license}`;
  if (license === "MIT") {
    license =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0") {
    license =
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GNU GPL v3") {
    license =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "GNU GPL v2") {
    license =
      "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
  } else {
    license = "NOT positive";
  }
  return `## license:
  ${license}`;
}

function renderMainTitle(title) {
  title = `${title}`;
  if (title === "") {
    return (title = `# Title:`);
  } else {
    return "# " + title;
  }
}
function renderMainDescription(description) {
  description = `## Description: 
  ${description}`;
  return `${description}`;
}

function renderTableOfContents(tableOfContents) {
  tableOfContents = `${tableOfContents}`;
    tableOfContents = `## Table of Contents:
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Tests](#Test)
    - [Contribution](#Contribution)`;
    
  return tableOfContents
}

function renderInstallationDescription(installation) {
  installation = `## How to install:
  ${installation}`;
  return installation;
}

function renderUsageDescription(usage) {
  usage = `## How To Use:
  ${usage}`;
  return usage;
}
function renderCreditsDescription(credits) {
  credits = `## Credits:
  ${credits}`;
  return credits;
}
function renderTests(test) {
  test = `## Tests
 ${test}`;
  return test;
}
function renderFaq(Contribution) {
  Contribution = `## How To Contribute: 
  ${Contribution}`;
  if ( Contribution === "") {
    Contribution = `## How To Contribute:`;
  }
  return  Contribution;
}
function renderEmail(Email) {
  Email = `## Contact Me:
   Email: ${Email}`;
  return Email;
}
function gitHubUser(gitHubUserName){
gitHubUserName=`GitHub:https://github.com/${gitHubUserName}`
return gitHubUserName
}
 // GitHub: https://github.com/${gitHubUserName}
// TODO: Create a function to generate markdown for README
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderMainTitle(data.title)}
   ${renderMainDescription(data.description)}
   ${renderTableOfContents(data.tableofContents)}
   ${renderInstallationDescription(data.installation)}
   ${renderUsageDescription(data.usage)}
   ${renderCreditsDescription(data.credits)}
   ${renderLicenseSection(data.license)}
   ${renderTests(data.test)}
   ${renderFaq(data.Contribution)}
   ${renderEmail(data.Email)}
   ${gitHubUser(data.gitHubUserName)}
`;
}

module.exports = generateMarkdown;
