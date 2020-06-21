const Controller = require("./controller/employeeController.js");
const inquirer = require("inquirer");
const Employee = require("./model/employee.js");

//Prompt for what action the user wants
inquirer.prompt({
    type: 'list',
    name: 'useraction',
    message: "What would you like to do today?",
    choices: [
        'View All Employees',
        'View All Roles',
        'View All Departments',
        'Add New Employee',
        'Add New Role',
        'Add New Department',
        'Update an Existing Role',
        'Exit'
    ]
}).then(({useraction}) => {

    console.log(`action is ${useraction}`);

    switch(useraction) {
        case 'View All Employees':
            Employee.getAllEmployees();
            break;
        case 'View All Roles': 
            Employee.getAllRoles();
            break;
        case 'View All Departments': 
            Employee.getAllDepartments();
            break;
        case 'Add New Employee': 
            Controller.newEmployeePrompt();
            break;
        case 'Add New Role': 
            Controller.newRolePrompt();
            break;
        case 'Add New Department': 
            Controller.newDepartmentPrompt();
            break;
        case 'Update an Existing Role': 
            Controller.promptUpdateToRole();
            break;
        case 'Exit':
            process.exit();
    }

});
