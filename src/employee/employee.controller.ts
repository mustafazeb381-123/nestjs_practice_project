import { Controller, Get, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) { }

    @Get()
    getEmployees() {
        return this.employeeService.getEmployees();
    }
    @Get(':id')
    getEmployeesById(@Param('id') id: string) {
        return this.employeeService.getEmployeesById(Number(id))
    }

}
