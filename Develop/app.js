const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function buildTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please select the role of the team member you want to add",
        name: "role",
        choices: ["Engineer", "Intern", "Finish Team Build"],
      },
    ])
    .then(function (userInput) {
      switch (userInput.role) {
        case "Engineer":
          addEngineer();
          break;

        case "Intern":
          addIntern();
          break;

        case "Finish Team Build":
          let html = render(employees);
          fs.writeFile(outputPath, html, (err) => {
            if (err) throw err;
            console.log('The html has been created.');
        });

          break;
      }
    });
}
// function buildTeam() {
//   inquirer
//     .prompt([
//       {
//         type: "list",
//         message:
//           "Please select the role of the team member you want to add",
//         name: "role",
//         choices: ["Engineer", "Intern", "Manager"],
//       },
//       {
//         type: "input",
//         name: "name",
//         message: "what is the team member's first and last name?",
//       },
//       {
//         type: "input",
//         name: "id",
//         message: "what is the team member's id?",
//       },
//       {
//         type: "input",
//         name: "email",
//         message: "what is the team member's email?",
//       },
//     ])
//     .then(function (userInput) {
//       switch (userInput.role) {
//         case "Engineer":
//           return inquirer.prompt([
//             {
//               type: "input",
//               name: "github",
//               message: "what is the team member's github?",
//             },
//             {
//               type: "list",
//               message: "Would you like to add another team member?",
//               name: "add",
//               choices: ["Yes", "No"],
//             }
//           ]);

//       }

//       switch (userInput.role) {
//         case "Intern":
//           return inquirer.prompt([
//             {
//               type: "input",
//               name: "school",
//               message: "what school did the intern go to?",
//             },
//             {
//               type: "list",
//               message: "Would you like to add another team member?",
//               name: "add",
//               choices: ["Yes", "No"],
//             },
//           ]);
//       }
//       break;

//       switch (userInput.role) {
//         case "Manager":
//           return inquirer.prompt([
//             {
//               type: "input",
//               name: "officeNumber",
//               message: "what is the Manager's office phone number?",
//             },
//             {
//               type: "list",
//               message: "Would you like to add another team member?",
//               name: "add",
//               choices: ["Yes", "No"],
//             },
//           ]);
//       }
//       break;

//       // render();

//     });
// }
// .then(function(data) {
// console.log(data)
//   var renderData = render(data);
// })

const addEngineer = () => {
  inquirer.prompt([
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
            },
            {
              type: "input",
              name: "github",
              message: "what is the team member's github?"
            }
  ]).then(function (data) {
    var engineer = new Engineer(data.name, data.id, data.email, data.github)
    employees.push(engineer);
    buildTeam();
    console.log(engineer);
  })
};

const addIntern = () => {
  inquirer.prompt([
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
            },
            {
              type: "input",
              name: "school",
              message: "what is the team member's school?"
            }
  ]).then(function (data) {
    var intern = new Intern(data.name, data.id, data.email, data.school)
    employees.push(intern)
    buildTeam();
    console.log(intern);
  })
};

const addManager = () => {
  inquirer.prompt([
            {
              type: "input",
              name: "name",
              message: "what is the team Manager's first and last name?",
            },
            {
              type: "input",
              name: "id",
              message: "what is the Manager's id?",
            },
            {
              type: "input",
              name: "email",
              message: "what is the Manager's email?",
            },
            {
              type: "input",
              name: "officeNumber",
              message: "what is the Manager's office number?"
            }
  ]).then(function (data) {
    manager = new Manager(data.name, data.id, data.email, data.officenumber)
    employees.push(manager)
    buildTeam();
    console.log(manager);
  })
};

addManager();
// render();

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
