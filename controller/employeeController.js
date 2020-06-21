const Employee = require("../model/employee.js");
const inquirer = require("inquirer");
const Router = {


         //Ask User for field values for new Employee
         newEmployeePrompt: function () {

            

        },

        //Ask User for field values for new Role
        newRolePrompt: function() {

            

        },

        //Ask User for field values for new Department
        newDepartmentPrompt: function () {

            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the name of the new department you want to do?",
                }
            ]).then(({name}) => {

                let newEmployee = {name: name};
                Employee.addNewDepartment(newEmployee);
                    
            });

        },

        //Ask User which role to update, which field to update and what the new value is for an Existing Role
        promptUpdateToRole: function () {

        }

};

  module.exports = Router;