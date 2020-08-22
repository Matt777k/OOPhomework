// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee")

// The other three classes will extend Employee.

// In addition to Employee's properties and methods, Manager will also have:
class Manager extends Employee {
    constructor(officeNumber) {
       super(officeNumber);
       this.officeNumber = officeNumber;
    }
    getRole()  {

    }
 }
 



 // Overridden to return 'Manager'

