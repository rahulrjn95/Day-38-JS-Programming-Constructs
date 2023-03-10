console.log("Welcome to Employee Wage Program");

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let employeeHours = 0;
let employeeCheck = Math.floor(Math.random() * 10) % 3;
console.log(employeeCheck);

switch (employeeCheck) {

    case IS_PART_TIME:
        employeeHours = PART_TIME_HOURS;
        console.log("Employee works Part Time");
        break;

    case IS_FULL_TIME:
        employeeHours = FULL_TIME_HOURS;
        console.log("Employee works Full Time");
        break;

    default:
        employeeHours = 0;
}

let employeeWage = employeeHours * WAGE_PER_HOUR;
console.log("Employee Wage = " + employeeWage);