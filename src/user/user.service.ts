import { Injectable } from '@nestjs/common';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async createUser(): Promise<User> {
        const newUser = new this.userModel({
            name: 'John Doe',
            address: {
                street: '123 Main St',
                city: 'Anytown',
            },
        });
        return newUser.save();
    }

    async getAllUsers(): Promise<User[]> {
        return this.userModel.find().exec();
    }




}
