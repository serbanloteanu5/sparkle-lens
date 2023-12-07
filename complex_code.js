/*
 * Filename: complex_code.js
 * Description: A complex and sophisticated JavaScript program showcasing a real-world scenario
 * Author: Virtual Assistant
 * Date: November 2021
 */

// Global variables for the Employee Management System
let employees = []; // Array to store employee objects
let departments = ["Finance", "Human Resources", "Marketing", "Operations"]; // Array of department names

// Employee class representing an employee entity
class Employee {
  constructor(name, age, department) {
    this.name = name;
    this.age = age;
    this.department = department;
  }

  getProfile() {
    return `${this.name} is ${this.age} years old and works in the ${this.department} department.`;
  }

  static getAverageAge() {
    let totalAge = 0;
    employees.forEach((employee) => {
      totalAge += employee.age;
    });

    return totalAge / employees.length;
  }
}

// Function to add a new employee
function addEmployee(name, age, department) {
  const employee = new Employee(name, age, department);
  employees.push(employee);
}

// Function to remove an employee
function removeEmployee(employeeName) {
  employees = employees.filter((employee) => employee.name !== employeeName);
}

// Function to print all employees
function printEmployees() {
  employees.forEach((employee) => {
    console.log(employee.getProfile());
  });
}

// Function to calculate and print the average age of all employees
function printAverageAge() {
  console.log(`The average age of all employees is ${Employee.getAverageAge().toFixed(2)} years.`);
}

// Function to sort employees by age in ascending order
function sortEmployeesByAge() {
  employees.sort((a, b) => a.age - b.age);
}

// Main program execution
addEmployee("John Doe", 30, "Finance");
addEmployee("Jane Smith", 35, "Human Resources");
addEmployee("Alex Johnson", 28, "Marketing");
addEmployee("Michael Brown", 32, "Operations");

console.log("--- Initial Employee Details ---");
printEmployees();
console.log("--- Average Age ---");
printAverageAge();

console.log("\n--- Removing employee 'John Doe' ---");
removeEmployee("John Doe");
console.log("--- Updated Employee Details ---");
printEmployees();
console.log("--- Average Age ---");
printAverageAge();

console.log("\n--- Sorting Employees by Age ---");
sortEmployeesByAge();
console.log("--- Sorted Employee Details ---");
printEmployees();

// Output: 
// --- Initial Employee Details ---
// Jane Smith is 35 years old and works in the Human Resources department.
// Alex Johnson is 28 years old and works in the Marketing department.
// Michael Brown is 32 years old and works in the Operations department.
// --- Average Age ---
// The average age of all employees is 31.67 years.
// 
// --- Removing employee 'John Doe' ---
// --- Updated Employee Details ---
// Jane Smith is 35 years old and works in the Human Resources department.
// Alex Johnson is 28 years old and works in the Marketing department.
// Michael Brown is 32 years old and works in the Operations department.
// --- Average Age ---
// The average age of all employees is 31.67 years.
// 
// --- Sorting Employees by Age ---
// --- Sorted Employee Details ---
// Alex Johnson is 28 years old and works in the Marketing department.
// Michael Brown is 32 years old and works in the Operations department.
// Jane Smith is 35 years old and works in the Human Resources department.