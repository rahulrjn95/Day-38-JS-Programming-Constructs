console.log("Welcome to Employee Wage Program");

const IS_ABSENT = 0
let employeeCheck = Math.floor(Math.random() * 10) % 2;
console.log(employeeCheck);

if (employeeCheck == IS_ABSENT) {
    console.log("Employee is ABSENT");
} 
else {
    console.log("Employee is PRESENT");
}