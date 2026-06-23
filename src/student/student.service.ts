import { StudentModule } from './student.module';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
    constructor(
        @InjectModel(Student.name)
        private studentModule: Model<StudentDocument>
    ) { }

    async createStudent(data: Partial<Student>): Promise<Student> {
        const newStudent = new this.studentModule(data);
        return newStudent.save();
    }

    async getAllStudents(): Promise<Student[]> {
        return this.studentModule.find().exec();
    }

    async getStudentById(id: string): Promise<Student | null> {
        return this.studentModule.findById(id).exec();

    }

    //put request 

    async updateStudent(id: string, data: Partial<Student>): Promise<Student | null> {
        return this.studentModule.findByIdAndUpdate(id, {
            name: data.name ?? null,
            email: data.email ?? null,
            age: data.age ?? null,
        }, { overwrite: true, returnDocument: 'after' }).exec();
    }

    async patchStudent(id: string, data: Partial<Student>): Promise<Student | null> {
        return this.studentModule.findByIdAndUpdate(id, data, { returnDocument: 'after' }).exec();
    }

    async deleteStudent(id: string): Promise<Student | null> {
        return this.studentModule.findByIdAndDelete(id).exec();

    }









}
