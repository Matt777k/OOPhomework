// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee")

// const manager = new Manager(officeNumber)
// The other three classes will extend Employee.

// In addition to Employee's properties and methods, Manager will also have:
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
    }
    getRole()  {
      return "Manager";
    }
    getOfficeNumber() {
       return this.officeNumber;
    }
 }
 


module.exports = Manager;
 // Overridden to return 'Manager'

