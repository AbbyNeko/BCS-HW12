
DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;

CREATE TABLE departments (
    id INT AUTO_INCREMENT  NOT NULL,
    name VARCHAR(30),
    PRIMARY KEY(id)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT  NOT NULL,
    title VARCHAR(100),
    salary DECIMAL (10,2),
    department_id INT,
    PRIMARY KEY(id)
);

CREATE TABLE employees (
    id INT AUTO_INCREMENT  NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY(id)
);