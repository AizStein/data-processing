const employees = [
  {
    name: "Max Müller",
    city: "Berlin",
    position: "Software Engineer",
    salary: 60000,
  },
  {
    name: "Anna Meier",
    city: "Munich",
    position: "Project Manager",
    salary: 90000,
  },
  {
    name: "Lukas Schmidt",
    city: "Hamburg",
    position: "Designer",
    salary: 75000,
  },
  {
    name: "Sophie Schneider",
    city: "Cologne",
    position: "Developer",
    salary: 55000,
  },
  {
    name: "Emma Fischer",
    city: "Berlin",
    position: "Product Owner",
    salary: 95000,
  },
  {
    name: "Paul Weber",
    city: "Frankfurt",
    position: "Scrum Master",
    salary: 80000,
  },
];

/*1. **Filter Employees by City**: Create a new array that only includes employees who are based in Berlin.  */

const employeesFromBerlin = employees.filter((arr) => arr.city === "Berlin");

console.log("Employees in Berlin: ", employeesFromBerlin);

/* **Employee Names**: Create an array of strings that contains only the names of all employees in uppercase. */

const listOfNames = employees.map((names) => names.name.toUpperCase());

console.log("Employees: ", listOfNames);

/* 3. **Calculate Average Salary**: Calculate the average salary of all employees. */

const averageSalary =
  employees.reduce((acc, salary) => acc + salary.salary, 0) / employees.length;

console.log("Average salary: ", averageSalary); // Average salary:  75833.33333333333

/* 4. **Sort Employees by Salary**: Create a new array of employees sorted by their salary in descending order. */

const sortedList = employees.sort((a, b) => b.salary - a.salary);

console.log(sortedList);
