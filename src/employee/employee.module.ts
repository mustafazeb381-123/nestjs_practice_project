import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, employeeSchema } from './schema/employee.schema';
import { Profile, profileSchema } from './schema/profile.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Employee.name, schema: employeeSchema },
    { name: Profile.name, schema: profileSchema }
  ])],
  providers: [EmployeeService],
  controllers: [EmployeeController]
})
export class EmployeeModule { }
