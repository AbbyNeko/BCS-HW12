const orm = require("./config/orm.js");

let Employee = {

    getAllDepartments: function() {
        orm.selectAll('departments');
    },
    getAllRoles: function() {
        orm.selectAll('roles');
    },
    getAllEmployees: function() {
        orm.selectAll('employees');
    },
    addNewDepartment: function(newDeptObj) {
        orm.addNewRow('departments', ['name'], newDeptObj);
    }, 
    addNewRole: function(newRoleObj) {
        orm.addNewRow('roles', ['title', 'salary', 'department_id'], newRoleObj);
    }, 
    addNewEmployee: function(newEmployeeObj) {
        orm.addNewRow('employees', ['first_name','last_name','role_id', 'manager_id',], newEmployeeObj);
    }, 
    updateRole(id, tableCol, newValue) {
        orm.updateColumn(id, 'roles', tableCol, newValue);
    }

};

module.exports = Employee;