const Employee = require("../model/employee.js");
const inquirer = require("inquirer");

const Router = {


         //Ask User for field values for new Employee
         newEmployeePrompt: function () {

    
        },

        //Ask User for field values for new Role
        newRolePrompt: function() {

            
            Employee.returnAllDepartments(function(allExistingDept) {

                    //console.log(`existing dept - ${JSON.stringify(allExistingDept)}`);

                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'title',
                            message: "What will the title of the new role be?",
                        }, 
                        {   
                            type: 'number',
                            name: 'salary',
                            message: 'What salary will this new role have?'
                        }, 
                        {   
                            type: 'list',
                            name: 'department',
                            message: 'Which department does this role belong to?',
                            choices: allExistingDept
                        }
                    ]).then(({title, salary, department}) => {

                        let deptObj = allExistingDept.filter(dept => dept.name === department);
                        //console.log(`dept id - ${deptObj[0].id}`);
                        let newRole = {title: title, salary: salary, department_id: deptObj[0].id};
                        Employee.addNewRole(newRole);
                            
                    });
                        
            });

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