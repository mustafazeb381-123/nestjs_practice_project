import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {

    private students = [
        { id: 1, name: 'Mustafa', age: 26, email: 'student1@example.com' },
        { id: 2, name: 'Ali', age: 27, email: 'student2@example.com' },
        { id: 3, name: 'Ahmed', age: 28, email: 'student3@example.com' },
        { id: 4, name: 'Omar', age: 29, email: 'student4@example.com' },
    ];

    getAllStudents() {
        return this.students;

    }

    getStudentById(id: number) {
        const student = this.students.find((item) => item.id == id);
        if (!student) {
            throw new NotFoundException('Student not found');
        }
        return student;
    }
    // post 
    createStudent(data: { name: string, age: number, email: string }) {
        const newStudent = {
            id: this.students.length + 1,
            ...data,
        }
        this.students.push(newStudent);
        return newStudent;
    }
    // put 
    updateStudent(id: number, data: { name: string, age: number, email: string }) {
        const index = this.students.findIndex((item) => item.id == id);
        if (index === -1) {
            throw new NotFoundException('Student not found!');
        }
        this.students[index] = {
            id,
            ...data,
        };
        return this.students[index];
    }
    // patch
    patchStudent(id: number, data: Partial<{ name: string, age: number, email: string }>) {
        const student = this.getStudentById(id);
        Object.assign(student, data);
        return student;
    }

    // delete
    deleteStudent(id: number) {
        const index = this.students.findIndex((item) => item.id == id);
        if (index === -1) {
            throw new NotFoundException('Student not found!');
        }

        const deletedStudent = this.students.splice(index, 1);
        return { message: 'Student deleted successfully', student: deletedStudent[0] };
    }





}
