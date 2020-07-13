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
        name: "contributing",
        message: "If you would like people to contribute to your work, please explain how they can do that."
      },
      {
        type: "input",
        name:"tests",
        message: "Please describe any tests you conducted and their results."  
      },
      {
        type: "list",
        name:"questions",
        message:"Please type what you would like for the <Questions> section of the document."
      },
      {
        type: "input",
        name: "github",
        message: "Please enter your github username and repository URL for this project."  
      }
    ]);
  }

// function to write README file
// function writeToFile(fileName, data) {}

function generateREADME(answers) {
    return `
    #${answers.projectTitle}
    ---
    ##Table of Contents
    ---
    ###[Description](#Description)
    ###[Installation](#Installation)
    ###[Usage](#Usage)
    ###[License](#License)
    ###[Contributing](#Contributing)
    ###[Tests](#Tests)
    ###[Questions](#Questions)
    ###[Github](#Github)
    `

}

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
