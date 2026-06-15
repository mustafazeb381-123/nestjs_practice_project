import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
    private employees = [
        { id: 1, name: 'Employee 1', age: 20, email: 'employee1@example.com' },
        { id: 2, name: 'Employee 2', age: 21, email: 'employee2@example.com' },
        { id: 3, name: 'Employee 3', age: 22, email: 'employee3@example.com' },
    ];
    getEmployees() {
        return this.employees;
    }
    getEmployeesById(id: number) {
        return this.employees.find((employee) => employee.id === id); //this is a function to find the employee by id
    }

}
