// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## GitHub

  ${data.GitHub}

## Description  

  ${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)

 
## Installation

  ${data.installation}
  

## Usage Information

  ${data.usage}

## Contribution Guidelines

  ${data.contribution}

## Test Instructions

  ${data.test}

## License

  ${data.license}

## Badge

  ${data.badge}

`;
}

module.exports = generateMarkdown;
