import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user.schema';

@Controller('user') //this is decorators to define the controller and the route
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Post()
    createUser() {
        return this.userService.createUser();
    }
    @Get()
    getAllUsers() {
        return this.userService.getAllUsers();
    }

}
