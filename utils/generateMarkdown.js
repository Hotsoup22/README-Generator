// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

function renderLicenseSection(license) {
  license = `license for now
  ${license}`;
  return `## license:
  ${license}`;
}

function renderMainTitle(title) {
  title = `# ${title}`;
  return `${title}`;
}
function renderMainDescription(description) {
  description = `## Description 
  ${description}`;
  return `${description}`;
}

function renderTableOfContents(tableOfContents) {
  tableOfContents = `${tableOfContents}`;
  if (tableOfContents === "yes" || "y" || "YES" || "Y") {
    return `## Table of Contents:
       - [Installation](#installation)
       - [Usage](#usage)
       - [Credits](#credits)
       - [License](#license)`;
  } else {
    return false + "123";
  }
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
function renderFaq(Faq) {
  Faq = `## FAQ/Questions:
  ${Faq}`;
  return Faq;
}

// TODO: Create a function to generate markdown for README
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderMainTitle(data.title)}
   ${renderMainDescription(data.description)}
   ${renderTableOfContents(data.tableContentsQ)}
   ${renderInstallationDescription(data.installation)}
   ${renderUsageDescription(data.usage)}
   ${renderCreditsDescription(data.credits)}
   ${renderLicenseSection(data.license)}
   ${renderTests(data.test)}
   ${renderFaq(data.Faq)}
`;
}

module.exports = generateMarkdown;

