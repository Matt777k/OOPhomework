const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function buildTeam () {
inquirer.prompt([
  {
    type: "list",
    message: "Please select the role of the team member you want to add or select Finished Team Build",
    name: "role",
    choices: [
      "Engineer",
      "Intern",
      "Manager",
      "Finished Team Build"
    ]
  },
  {
    type: "input",
    name: "name",
    message: "what is the team member's first and last name?",
  },
  {
    type: "input",
    name: "id",
    message: "what is the team member's id?",  
  },
  {
    type: "input",
    name: "email",
    message: "what is the team member's email?", 
  } 
]).then(function(userInput) {
  switch(userInput.role) {
    case "Engineer":
      return inquirer.prompt ([
        {
          type: "input",
          name: "github",
          message: "what is the team member's github?",   
        },
        {
          type: "list",
          message: "Would you like to add another team member?",
          name: "add",
          choices: [
            "Yes",
            "No"
          ]
        }
        // break;
      ])

      }
      
      

    case "Intern":
      addIntern();
      break;

    case "Manager":
      addManager();
      break;

    case "Finished Team Build":
    render();
    break;
  }
}); 
// .then(function(data) {
// console.log(data)
//   var renderData = render(data);
// })
};

const addEngineer = () => {}
// render();
buildTeam();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
