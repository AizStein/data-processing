 ## Employee Data Processing

 ### You are given an array of employee objects
```javascript
const employees = [
    { name: 'Max Müller', city: 'Berlin', position: 'Software Engineer', salary: 60000 },
    { name: 'Anna Meier', city: 'Munich', position: 'Project Manager', salary: 90000 },
    { name: 'Lukas Schmidt', city: 'Hamburg', position: 'Designer', salary: 75000 },
    { name: 'Sophie Schneider', city: 'Cologne', position: 'Developer', salary: 55000 },
    { name: 'Emma Fischer', city: 'Berlin', position: 'Product Owner', salary: 95000 },
    { name: 'Paul Weber', city: 'Frankfurt', position: 'Scrum Master', salary: 80000 }
];
```

Your task is to perform several operations on this array using `map`, `filter`, `reduce`, and `sort` methods. The operations are as follows:

1. **Filter Employees by City**: Create a new array that only includes employees who are based in Berlin.
2. **Employee Names**: Create an array of strings that contains only the names of all employees in uppercase.
3. **Calculate Average Salary**: Calculate the average salary of all employees.
4. **Sort Employees by Salary**: Create a new array of employees sorted by their salary in descending order.