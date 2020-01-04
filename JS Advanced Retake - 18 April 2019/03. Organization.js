class Organization {
    departmentsBudget = {};

    constructor(name, budget) {
        this.name = name;
        this.employees = [];
        this.budget = budget;
        this.departmentsBudget['marketing'] = this.budget * 0.6;
        this.departmentsBudget['finance'] = this.budget * 0.75;
        this.departmentsBudget['production'] = this.budget * 0.65;
    }

    add(employeeName, department, salary) {
        if (salary <= this.departmentsBudget[department]) {
            this.employees.push({employee: employeeName, department, salary});
            this.departmentsBudget[department] -= salary;
            return `Welcome to the ${department} team Mr./Mrs. ${employeeName}`
        }
        return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is ${this.departmentsBudget[department]}.`
    }

    employeeExists(employeeName) {
        for (let emp of this.employees){
            if ( emp.employee === employeeName) {
                return `Mr./Mrs. ${employeeName} is part of the ${emp.department} department.`
            }
        }
        return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`
    }

    leaveOrganization(employeeName) {
        for (let emp of this.employees){
            if ( emp.employee === employeeName) {
                this.departmentsBudget[emp.department]+=emp.salary;
                this.employees.splice(this.employees.indexOf(emp),1);
                return `It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`;
            }
        }
        return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`
    }
}

let organization = new Organization('SoftUni', 20000);
console.log(organization.add('Peter', 'marketing', 1200));
console.log(organization.add('Niki', 'finance', 1200));
console.log(organization.add('Robert', 'production', 2000));
console.log(organization.employeeExists('Niki'));
console.log(organization.employeeExists('Robert'));
console.log(organization.employeeExists('Peter'));
console.log(organization.leaveOrganization('Peter'));
console.log(organization.employeeExists('Peter'));
console.log(organization.departmentsBudget['marketing']);

