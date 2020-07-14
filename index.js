const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptUser() {
  return inquirer.prompt([
    { type: "input", name: "name", message: "Please enter your name." },
    {
      type: "number",
      name: "year",
      message: "What year did you complete this project?",
    },
    {
      type: "input",
      name: "projectTitle",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "What is the description of your project?",
    },
    {
      type: "input",
      name: "screenshots",
      message:
        "Please enter any URLs for screenshots relevant to this project, or type <skip>.",
    },
    {
      type: "input",
      name: "installation",
      message: "What instructions are necessary to install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "How would you describe the usage of your project",
    },
    {
      type: "list",
      name: "license",
      message: "Which License would you like to use?",
      choices: ["MIT", "GNU General Public", "Apache", "None"],
    },
    {
      type: "input",
      name: "contributing",
      message:
        "If you would like people to contribute to your work, please explain how they can do that.",
    },
    {
      type: "input",
      name: "tests",
      message: "Please describe any tests you conducted and their results.",
    },
    {
      type: "input",
      name: "questions",
      message:
        "Please provide your email for questions related to the project.",
    },
    {
      type: "input",
      name: "github",
      message:
        "Please enter your github username and repository URL for this project.",
    },
  ]);
}

// function to write README file

function generateREADME(answers) {
  if (answers.license === "MIT") {
    answers.license =
      "MIT License <br/> Copyright (c) `${answers.year} ${answers.name}` <br/> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: <br/> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. <br/> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.";
  }
  if (answers.license === "GNU General Public") {
    answers.license = "";
  }
  if (answers.license === "Apache") {
    answers.license = "";
  }
  if (answers.license === "None") {
    answers.license =
      "Please contact me for information regarding licensing this software.";
  }
  return `
    # ${answers.projectTitle}
    ---
    ## Table of Contents
    ---
    ### [Description](#Description)
    ### [Screenshots](#Screenshots)
    ### [Installation](#Installation)
    ### [Usage](#Usage)
    ### [License](#License)
    ### [Contributing](#Contributing)
    ### [Tests](#Tests)
    ### [Questions](#Questions)
    ### [Github](#Github)
    ---
    ### <a name="Description"></a>Description
    ${answers.description}
    ### <a name="Screenshots"></a>Screenshots
    ${answers.screenshots}
    ### <a name="Installation"></a>Installation
    ${answers.installation}
    ### <a name="Usage"></a>Usage
    ${answers.usage}
    ### <a name="License"></a>License
    ${answers.license}
    ### <a name="Contributing"></a>Contributing
    ${answers.contributing}
    ### <a name="Tests"></a>Tests
    ${answers.tests}
    ### <a name="Questions"></a>Questions
    ${answers.questions}
    ### <a name="Github"></a>Github
    ${answers.github}
    `;
}

// function to initialize program
async function init() {
  try {
    const answers = await promptUser();

    const README = generateREADME(answers);

    await writeFileAsync("README.md", README);

    console.log("Successfully wrote to README.md");
    console.log(answers);
    console.log(typeof answers.license);
  } catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();
