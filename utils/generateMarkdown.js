// function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title}
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
## Description
#### ${answers.description}
## Table of Contents
- [Title](#title)
- [Description](#description)
- [Instructions](#instructions)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Testing](#testing)
- [Github Username](#username)
- [Email](#email)
## Installation
#### ${answers.install}
## Usage
#### ${answers.usage}
## Deployment
#### [Application Link](${answers.deployment})
## Demonstration  
[Video Walkthrough](${answers.videodemo})
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 
## Find me on GitHub: 
[${answers.github}](https://github.com/${answers.github})  
## Email me with any questions:
#### ${answers.email}
`;
}

module.exports = generateMarkdown;