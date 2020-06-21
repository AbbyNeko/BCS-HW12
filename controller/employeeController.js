const Employee = require("../model/employee.js");
const inquirer = require("inquirer");

const Router = {


         //Ask User for field values for new Employee
         newEmployeePrompt: function () {

                let promptQuestions = [
                    {
                        type: 'input',
                        name: 'first_name',
                        message: "What is the new employee's first name?",
                    }, 
                    {   
                        type: 'input',
                        name: 'last_name',
                        message: "What is the new employee's last name?"
                    }
                ];

                Employee.returnAllRoles(function(allExistingRoles) {

                    let allRolesArr = allExistingRoles.map(role => role.title);

                    promptQuestions.push({   
                            type: 'list',
                            name: 'role',
                            message: 'Which role does this new employee have?',
                            choices: allRolesArr
                    });

                    //console.log(`existing dept - ${JSON.stringify(allExistingDept)}`);

                    Employee.returnAllEmployees(function(allExistingEmployees) {

                                let allEmployeesArr = allExistingEmployees.map(employee => employee.first_name+' '+employee.last_name);

                                promptQuestions.push({   
                                    type: 'list',
                                    name: 'manager',
                                    message: 'Who is the manager of this new employee?',
                                    choices: allEmployeesArr
                                });

                                inquirer.prompt(promptQuestions).then(({first_name, last_name, role, manager}) => {
                                    let firstName = manager.split(' ')[0];
                                    let lastName = manager.split(' ')[1];

                                    let roleObj = allExistingRoles.filter(eachRole => eachRole.title === role);
                                    let managerObj = allExistingEmployees.filter(employee => employee.first_name === firstName && employee.last_name === lastName);

                                    let newEmployee = {first_name: first_name, last_name: last_name, role_id: roleObj[0].id, manager_id: managerObj[0].id};
                                    Employee.addNewEmployee(newEmployee);
                                        
                                });

                    });

                });
            
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

            Employee.returnAllRoles(function(allExistingRoles) {

                    let allRolesArr = allExistingRoles.map(role => role.title);

                    inquirer.prompt([
                        {
                            type: 'list',
                            name: 'roleToUpdate',
                            message: 'Which role do you want to update?',
                            choices: allRolesArr
                        },
                        {
                            type: 'list',
                            name: 'column',
                            message: 'Which field do you want to update?',
                            choices: [
                                'Title',
                                'Salary',
                                'Department'
                            ]
                        }
                    ]).then(function({roleToUpdate, column}) {

                        let roleObj = allExistingRoles.filter(eachRole => eachRole.name === roleToUpdate);
                        const roleId = roleObj[0].id;

                        switch(column) {
                            case 'Title':
                                promptRoleTitle(roleId);
                                break;
                            case 'Salary':
                                promptRoleSalary(roleId);
                                break;
                            case 'Department':
                                promptRoleDepartment(roleId);
                        }

                    });

            });

        }

};


function promptRoleTitle(roleId) {

    inquirer.prompt({
        type: 'input',
        name: 'title',
        message: 'What would be the new title for this role?'
    }).then(function({title}) {

        Employee.updateRole(roleId, 'title', title);

    });

}

function promptRoleSalary(roleId) {

    inquirer.prompt({
        type: 'number',
        name: 'salary',
        message: 'What would be the new salary for this role?'
    }).then(function({salary}) {

        Employee.updateRole(roleId, 'salary', salary);

    });
    
}

function promptRoleDepartment(roleId) {

    Employee.returnAllDepartments(function(allExistingDept) {

        inquirer.prompt({
            type: 'list',
            name: 'department',
            message: 'What would be the new department for this role?',
            choices: allExistingDept
        }).then(function({department}) {
            
            let deptObj = allExistingDept.filter(dept => dept.name === department);
            Employee.updateRole(roleId, 'department_id', deptObj[0].id);
    
        });

    });
    
}



  module.exports = Router;