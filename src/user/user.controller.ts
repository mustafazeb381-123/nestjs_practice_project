import { Controller, Get } from '@nestjs/common';

@Controller('user') //this is decorators to define the controller and the route
export class UserController {
    @Get() //this is decorators to define the method and the route
    getUsers(): string {
        return 'User data fetch successfully from the database using GET method';
    }
}
