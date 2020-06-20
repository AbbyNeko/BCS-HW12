INSERT INTO departments(name) VALUES ("IT");
INSERT INTO departments(name) VALUES ("Customer Service");
INSERT INTO departments(name) VALUES ("Sales");
INSERT INTO departments(name) VALUES ("Finance");


INSERT INTO roles(title, salary, department_id) VALUES ("Sales Manager", 55,340.34, 3);
INSERT INTO roles(title, salary, department_id) VALUES ("Sales Representative", 35,240.50, 3);
INSERT INTO roles(title, salary, department_id) VALUES ("Receptionist", 38,140.50, 2);
INSERT INTO roles(title, salary, department_id) VALUES ("Cloud System Administrator", 50,240.50, 1);
INSERT INTO roles(title, salary, department_id) VALUES ("Project Product and Production Manager", 70,000.00, 1);
INSERT INTO roles(title, salary, department_id) VALUES ("Cloud Software and Network Engineer", 68,000.00, 1);
INSERT INTO roles(title, salary, department_id) VALUES ("Accountant", 55,000.00, 4);


INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ("Rebecca", "Pearson", 1, null);
INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ("John", "Smith", 2, 1);
INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ("Chloe", "Smith", 3, null);
INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ("Joey", "Flynn", 7, null);
INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ("Zachary", "Bell", 6, 5);
INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ("Pedro", "Quintana", 4, 5);
INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ("Ashley", "Silva", 5, null);
INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ("Bryce", "Dwight", 2, 1);

