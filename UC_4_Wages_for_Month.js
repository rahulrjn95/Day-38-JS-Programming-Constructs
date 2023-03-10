console.log("Welcome to Employee Wage Program");

const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 3;

let employeeHours = 0;

function getWorkingHours(employeeCheck) {

    switch (employeeCheck) {

        case IS_PART_TIME:
            console.log("Employee works Part Time");
            return PART_TIME_HOURS;

        case IS_FULL_TIME:
            console.log("Employee works Full Time");
            return FULL_TIME_HOURS;

        default:
            console.log("Employee is ABSENT");
            return 0;
    }
}

for(let day = 0; day<NUM_OF_WORKING_DAYS; day++){
    employeeCheck = Math.floor(Math.random() * 10) % 3;
    console.log(employeeCheck);
    employeeHours += getWorkingHours(employeeCheck);
}

let employeeWage = employeeHours * WAGE_PER_HOUR;
console.log("Total Working Hours = "+ employeeHours + "\nEmployee Wage = " + employeeWage);