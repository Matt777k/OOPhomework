// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// in addition to Employee's properties and methods, Engineer will also have:
const Employee = require("./Employee")

// const engineer = new Employee(github) // GitHub username

class Engineer extends Employee {
    constructor(name, id, email, github) {
      super(name, id, email);
      this.github = github;
    }
    
// Overridden to return 'Engineer'
    getRole()  {
      return "Engineer";
    }
    getGithub() {
       return this.github;
    }
 }
 


module.exports = Engineer;


