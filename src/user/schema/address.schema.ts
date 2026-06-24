import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Address {
    @Prop({
        required: true,
    })
    street: string;
    @Prop({
        required: true,
    })
    city: string;

}