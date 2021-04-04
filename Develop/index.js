// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the project title?"
    },
    {
        type: "input",
        name: "motivation",
        message: "What was your motivation for this project? (TTQA)"
    },
    {
        type: "input",
        name: "build",
        message: "Why did you build this project? (start with the word 'it')" 
    },
    {
        type: "input",
        name: "solve",
        message: "What problem does it solve? (TTQA)"
    },
    {
        type: "input",
        name: "learn",
        message: "What did you learn? (start with the word 'that')"
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install your app?"
    },
    {
        type: "input",
        name: "instructions",
        message: "Instructions to follow"
    },
    {
        type: "input",
        name: "credit",
        message: "Any credit?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use your app?"
    },
    {
        type: "input",
        name: "contribution",
        message: "How can others contribute to this project"
    },
    {
        type: "list",
        name: "license",
        message: "What license did you use?",
        choices: ["The MIT license", "Apache license", "GPL license", "GNU license", "N/A"]
    },
    {
        type: "input",
        name: "git",
        message: "Github username:"
    },
    {
        type: "input",
        name: "email",
        message: "E-mail:"
    },
    {
        type: "input",
        name: "linkedin",
        message: "Linkedin:"
    },
]

inquirer.prompt(questions)
.then(({
    title,
    motivation,
    build,
    solve,
    learn,
    installation,
    instructions,
    credit,
    license,
    git,
    linkedin,
    email,
    usage,
    contribution,
}) => {
    //template
    const generated = `# ${title}
## Description
${motivation}. I decided to build this project because ${build}. ${solve}. For this project I learned, ${learn}.
## Table of Contents
* [Installation] (#installation)
* [Usage] (#usage)
* [Contribution] (#contribution)
* [Credits] (#credits)
* [License] (#license)
# Installtion
${installation}
## Usage
${usage}
## Contribution
${contribution}
## Instructions
${instructions}
## Credits
${credit}
## License
${license}
        
# Contact
If you have any questions, feel free to reach out!
* Github: ${git}
* Linkedin: ${linkedin}
* E-mail: ${email}`;
    writeToFile(title, generated);
});



// TODO: Create a function to write README file
function writeToFile(title, data) {
    fs.writeFile(`${title.toLowerCase().split(" ").join(" ")}.md`,data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log("Your README has been created!");
    })
}

