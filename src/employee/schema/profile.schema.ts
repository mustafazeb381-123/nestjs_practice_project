import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Profile extends Document {
    @Prop()
    name: string;
    @Prop()
    age: number;
}

export const profileSchema = SchemaFactory.createForClass(Profile);