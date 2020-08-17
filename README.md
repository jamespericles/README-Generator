# README-Generator [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)

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

This application generates a README.md file from the terminal. Node is required to run this application. Typing `node index.js` from the terminal prompts the user with several questions related to their project. The application then takes the inputs from the user and appends them to the proper location within the README. 

The document also includes a table of contents with functioning links. The user is also able to select from three licenses, which will add the appropriate badge and license information. The application is also smart enough to know to delete the license section and the screenshot section if the user chooses to skip either, through the implementation of ternary functions. In-fact, I used this application to write this README file you're currently viewing.

Cool things to note, the app will check if you have a folder in this directory called `output`, and if you don't, it will generate one for you and save your `README` file there!

Also keep in mind, if you generate a `README` and leave it there after generating another file, the first one will be overwritten.

Within the `Usage` section of this document there is a detailed step by step explanation of the generator's user flow. You may find it handy to keep it open while using the application so you can get an idea of what each question is used for. 

### <a name="Screenshots"></a>Screenshots

https://github.com/jamespericles/README-Generator/blob/master/Screenshots/Prompts_used_to_generate.png

This video showcases the project in action [here](https://youtu.be/mOrQN1apXFE)

### <a name="Installation"></a>Installation

Node needs to be installed to run app.js from the console. After cloning the repo to your machine, run `npm i` from the terminal to install all dependencies. Afterwards use `node app.js` in order to start the application from the console.

### <a name="Usage"></a>Usage

This project helps developers by prompting them with several different questions related to their project, and then formatting the information it receives into a quality README. This helps speed up the README writing process so that the developer can more quickly move on to actually writing out their work.

The user is asked the following questions related to the README document they would like to generate:

  1. `Please enter your name.` The answer to this question is used in the license generation. 
  2. `What year did you complete this project?` The year is appended to the license as well.
  3. `What is the title of your project?` The title is placed at the top of the README, next to whatever license badge chosen.
  4. `What is the description of your project?` This answer will be used to generate the first section of the document. 
  5. `Please enter any URLs for screenshots relevant to this project...` If you haven't uploaded any screenshots for the project yet, you can enter placeholder text and revisit it later. You may also type `<skip>` removing both the screenshot section from the document as well as its table of contents counterpart. Protip, if you'd like to create a hyperlink with a word rather than the link itself, give what you'd like to be hyperlinked inside of brackets, and the link itself within parens. [I'm a link](https://github.com/jamespericles)
  6. `What instructions are necessary to install your project?` This section is fairly important. If your project requires any installation further than cloning the repo, this is the place to include those instructions.
  7. `Which License would you like to use...` You'll be given four choices here, choosing `None` will delete the license section from the document and table of contents along with omitting a badge to be generated next to your project title.
  8. `If you would like people to contribute to your work, please explain how they can do that.` 
  9. `Please describe any tests you conducted and their results.` This question made not be prudent to most projects, but larger scale projects taking advantage of `npm test`, those results and or explanations on how to build on those tests belong here.
  10. `Please provide your email for questions related to the project.` This is handy for people to contact you if they have questions related to the project, the license you chose or how they can extend upon the project.
  11. `Please enter your github username or repository URL for this project...` Entering either the repository URL or your own github homepage URL is handy to show others your work. The generator will append `https://` to whatever your response is so no need to include it. 

### <a name="License"></a>License

MIT License

Copyright (c) 2020 James Pericles

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

### <a name="Contributing"></a>Contributing

Per the license, anyone is welcome to iterate on this application.

### <a name="Tests"></a>Tests

Upon completion of each task, I generated a new README using the application to ensure that everything was functioning as planned.

### <a name="Questions"></a>Questions

I can be reached at james.pericles@aol.com with any questions.

### <a name="Github"></a>Github

[My github homepage](https://github.com/jamespericles), [this projects repository homepage](https://github.com/jamespericles/README-Generator)
