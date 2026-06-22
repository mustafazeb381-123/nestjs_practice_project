import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/guards/roles/roles.decorator';
import { Role } from 'src/guards/roles/roles.enums';
import { RolesGuard } from 'src/guards/roles/roles.guard';

@Controller('user-roles')
export class UserRolesController {
    @Get('admin-data')
    @UseGuards(RolesGuard)
    @Roles(Role.ADMIN)
    getAdminData() {
        return { message: 'Admin data fetch successfully from the database using GET method' }
    }
    @Get('user-data')

    getUserData() {
        return { message: 'Anyone can access this data fetch successfully from the database using GET method' }
    }
}
