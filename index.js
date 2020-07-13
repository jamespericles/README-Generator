const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project?"
      },
      {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
      },
      {
        type: "input",
        name: "installation",
        message: "What instructions are necessary to install your project?"
      },
      {
        type: "input",
        name: "usage",
        message: "How would you describe the usage of your project"
      },
      {
        type: "list",
        name: "license",
        message: "Which License would you like to use?"
        choices: []
      },
      {
        type: "input",
        name: "linkedin",
        message: "Enter your LinkedIn URL."
      }
    ]);
  }

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
async function init() {
  try {
    const answers = await promptUser();

    const html = generateREADME(answers);

    await writeFileAsync("README.md", md);

    console.log("Successfully wrote to README.md");
  } catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();
